/* eslint-env mocha */

const process = require('process')
const pgModel = require('./../lib')
const HlPgClient = require('@wmfs/hl-pg-client')
const empty = require('./fixtures/empty.json')
const planets = require('./fixtures/people-and-planets.json')
const pgDiffSync = require('@wmfs/pg-diff-sync')
const chai = require('chai')
const path = require('path')
const chaiSubset = require('chai-subset')
chai.use(chaiSubset)
const expect = chai.expect

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
  // application specific logging, throwing an error, or other logic here
})

describe('UserId injection test', function () {
  this.timeout(process.env.TIMEOUT || 5000)
  let client
  let models

  before(function () {
    if (process.env.PG_CONNECTION_STRING && !/^postgres:\/\/[^:]+:[^@]+@(?:localhost|127\.0\.0\.1).*$/.test(process.env.PG_CONNECTION_STRING)) {
      console.log(`Skipping tests due to unsafe PG_CONNECTION_STRING value (${process.env.PG_CONNECTION_STRING})`)
      this.skip()
    }
  })

  let testUser = 'user-not-set'

  describe('setup', () => {
    it('create a new pg client', () => {
      client = new HlPgClient(process.env.PG_CONNECTION_STRING)
    })

    it('initially drop-cascade the pg_model_test schema, if one exists', async () => {
      for (const filename of ['uninstall.sql', 'install.sql']) {
        await client.runFile(path.resolve(__dirname, path.join('fixtures', 'scripts', filename)))
      }
    })

    it('install test database objects', async () => {
      const statements = pgDiffSync(empty, planets)
      for (const s of statements) {
        await client.query(s)
      }
    })

    it('get some model instances', () => {
      models = pgModel(
        {
          client: client,
          dbStructure: planets,
          service: {
            currentUser: () => testUser,
            createdByField: '_created_by',
            modifiedByField: '_modified_by'
          }
        }
      )
    })
  })

  describe('creation', () => {
    it('create a new person', async () => {
      testUser = 'creator'
      const idProperties = await models.pgmodelTest.person.create(
        {
          employeeNo: 2,
          firstName: 'Maggie',
          lastName: 'Simpson'
        },
        {}
      )

      expect(idProperties).to.eql({
        idProperties: {
          employeeNo: '2'
        }
      })
    })

    it('check created by', async () => {
      const doc = await models.pgmodelTest.person.findById(2)
      expect(doc).to.containSubset(
        {
          'employeeNo': '2',
          'firstName': 'Maggie',
          'lastName': 'Simpson',
          'createdBy': 'creator'
        }
      )
    })
  })

  describe('update', () => {
    it("update Maggie's age to 1", () => {
      testUser = 'modifier'
      return models.pgmodelTest.person.update(
        {
          employeeNo: 2,
          age: 1,
          firstName: 'Maggie',
          lastName: 'Simpson'
        },
        {}
      )
    })

    it('find Maggie has an age now', async () => {
      const doc = await models.pgmodelTest.person.findById(2)
      expect(doc).to.containSubset(
        {
          'employeeNo': '2',
          'firstName': 'Maggie',
          'lastName': 'Simpson',
          'age': 1,
          'createdBy': 'creator',
          'modifiedBy': 'modifier'
        }
      )
    })

    it('update Maggie again, but this time without an age', async () => {
      testUser = 'second-modifier'
      await models.pgmodelTest.person.update(
        {
          employeeNo: 2,
          firstName: 'Maggie',
          lastName: 'Simpson'
        },
        {}
      )
    })

    it("find Maggie's age has gone again", async () => {
      const doc = await models.pgmodelTest.person.findById(2)

      expect(doc).to.containSubset({
        'employeeNo': '2',
        'firstName': 'Maggie',
        'lastName': 'Simpson',
        'age': null,
        'createdBy': 'creator',
        'modifiedBy': 'second-modifier'
      })
    })

    it('patch Maggie to Margaret', async () => {
      testUser = 'patcher'
      await models.pgmodelTest.person.patch(
        {
          employeeNo: 2,
          firstName: 'Margaret'
        },
        {}
      )
    })

    it('find Maggie is now a Margaret', async () => {
      const doc = await models.pgmodelTest.person.findById(2)

      expect(doc).to.containSubset({
        'employeeNo': '2',
        'firstName': 'Margaret',
        'lastName': 'Simpson',
        'age': null,
        'createdBy': 'creator',
        'modifiedBy': 'patcher'
      })
    })
  })

  describe('upsert', () => {
    it('upsert (insert) Grampa', async () => {
      testUser = 'upserter'
      const idProperties = await models.pgmodelTest.person.upsert(
        {
          employeeNo: 10,
          firstName: 'Abe',
          lastName: 'Simpson',
          age: 82
        },
        {}
      )

      expect(idProperties).to.eql({
        idProperties: { employeeNo: '10' }
      })
    })

    it('find Grampa has been inserted via upsert', async () => {
      const doc = await models.pgmodelTest.person.findById(10)

      expect(doc).to.containSubset({
        'employeeNo': '10',
        'firstName': 'Abe',
        'lastName': 'Simpson',
        'age': 82,
        'createdBy': 'upserter',
        'modifiedBy': null
      })
    })

    it('upsert (update) Grampa', () => {
      testUser = 'second-upserter'
      return models.pgmodelTest.person.upsert(
        {
          employeeNo: 10,
          firstName: 'Abraham',
          lastName: 'Simpson',
          age: 83
        },
        {}
      )
    })

    it('find Grampa has now been updates via upsert', async () => {
      const doc = await models.pgmodelTest.person.findById(10)

      expect(doc).to.containSubset({
        'employeeNo': '10',
        'firstName': 'Abraham',
        'lastName': 'Simpson',
        'age': 83,
        'createdBy': 'upserter',
        'modifiedBy': 'second-upserter'
      })
    })
  })

  describe('cleanup', () => {
    it('finally drop-cascade the pg_model_test schema', async () => {
      await client.runFile(path.resolve(__dirname, path.join('fixtures', 'scripts', 'uninstall.sql')))
    })

    it('close database connections', async () => {
      await client.end()
    })
  })
})
