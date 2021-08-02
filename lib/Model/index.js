'use strict'

const _ = require('lodash')
const Finder = require('./actions/Finder')
const Creator = require('./actions/Creator')
const Destroyer = require('./actions/Destroyer')
const Updater = require('./actions/Updater')

const NotSet = 'NetSet'

function callbackify (promise, callback) {
  promise
    .then(result => callback(null, result))
    .catch(err => callback(err))
}

class Model {
  constructor (components, options) {
    this.client = options.client
    const table = components.table
    this.namespace = components.namespace
    this.modelId = components.modelId
    this.fullModelId = this.namespace + '_' + this.modelId
    this.schemaName = components.schemaName
    this.tableName = components.tableName
    this.fullTableName = this.schemaName + '.' + this.tableName
    this.fkConstraints = table.fkConstraints

    this.columnNames = Object.keys(table.columns)
    this.columnToPropertyId = this.columnNames.reduce((cols, col) => {
      cols[col] = _.camelCase(col)
      return cols
    }, {})
    this.propertyIdToColumn = Object.entries(this.columnToPropertyId).map(([col, prop]) => [prop, col]).reduce((props, [p, c]) => {
      props[p] = c
      return props
    }, {})
    this.propertyToType = this.columnNames.reduce((cols, col) => {
      cols[this.columnToPropertyId[col]] = table.columns[col].dataType
      return cols
    }, {})

    this.propertyIds = Object.entries(this.columnToPropertyId).filter(([col]) => col[0] !== '_').map(([col, prop]) => prop)
    this.pkColumnNames = table.pkColumnNames
    this.pkPropertyIds = this.pkColumnNames.map(column => this.columnToPropertyId[column])
    this.attributeIds = _.difference(this.propertyIds, this.pkPropertyIds)

    this.subDocIds = [] // Populated once all state-machines are available
    this.fkColumnNames = Object.values(table.fkConstraints).reduce((cols, constraint) => cols.concat(constraint.sourceColumns), [])
    this.fkPropertyIds = this.fkColumnNames.map(fkColumnName => _.camelCase(fkColumnName))
    this.attributeIdsWithoutfkPropertyIds = _.difference(this.attributeIds, this.fkPropertyIds)

    this.subModels = {}// Added once all state-machines are available
    this.deleteMissingSql = 'DELETE FROM ' + this.fullTableName + ' WHERE '
    if (this.pkColumnNames.length === 1) {
      this.deleteMissingSql += this.pkColumnNames[0] + ' != ANY($1)'
    } else {
      // TODO: Support composite-keyed sub docs
    }

    this.deleteMissingSql = 'DELETE FROM ' + this.fullTableName + ' WHERE '
    this.deleteMissingSql += this.pkColumnNames[0] + ' != ANY($1)'

    this.finder = new Finder(this)
    this.creator = new Creator(this)
    this.destroyer = new Destroyer(this)
    this.updater = new Updater(this)

    this.currentUserFn = () => null
    this.createdByField = null
    this.modifiedByField = null
    this.modifiedField = null
    if (options.service) {
      const service = options.service
      this.currentUserFn = service.currentUser ? () => service.currentUser() : () => null
      this.createdByField = service.createdByField ? service.createdByField : null
      this.modifiedByField = service.modifiedByField ? service.modifiedByField : null
      this.modifiedField = service.modifiedField ? service.modifiedField : null
    }
  }

  columnify (propertyIds) {
    if (Array.isArray(propertyIds)) {
      return propertyIds.map(id => this.propertyIdToColumn[id])
    }
    return this.propertyIdToColumn[propertyIds]
  }

  create (jsonData, options = {}, callback = NotSet) {
    if (callback !== NotSet) {
      return callbackify(this.create(jsonData, options), callback)
    } // if ...

    options.upsert = false
    const script = this.creator.makeStatements(jsonData, options)
    return this.client.run(script)
  }

  findById (id, callback = NotSet) {
    if (callback !== NotSet) {
      return callbackify(this.findById(id), callback)
    }

    return this.finder.findOne({
      where: this.makeWhereFromId(id)
    })
  }

  find (options, callback = NotSet) {
    if (callback !== NotSet) {
      return callbackify(this.find(options), callback)
    } // if ...

    return this.finder.findAll(options)
  }

  findOne (options, callback = NotSet) {
    if (callback !== NotSet) {
      return callbackify(this.findOne(options), callback)
    } // if ...

    options.limit = 1
    return this.finder.findOne(options)
  }

  extractIdFromJsonData (jsonData) {
    const id = []
    this.pkPropertyIds.forEach(
      function (propertyId) {
        id.push(jsonData[propertyId])
      }
    )
    return id
  }

  update (doc, options, callback = NotSet) {
    if (callback !== NotSet) {
      return callbackify(this.update(doc, options), callback)
    } // if ...

    if (!Object.prototype.hasOwnProperty.call(options, 'destroyMissingSubDocs')) options.destroyMissingSubDocs = false
    if (!Object.prototype.hasOwnProperty.call(options, 'setMissingPropertiesToNull')) options.setMissingPropertiesToNull = true

    const script = this.updater.makeStatements(doc, options)
    return this.client.run(script)
  }

  patch (doc, options, callback = NotSet) {
    if (callback !== NotSet) {
      return callbackify(this.patch(doc, options), callback)
    } // if ...

    options.destroyMissingSubDocsv = false
    options.setMissingPropertiesToNull = false

    const script = this.updater.makeStatements(doc, options)
    return this.client.run(script)
  }

  upsert (jsonData, options, callback = NotSet) {
    if (callback !== NotSet) {
      return callbackify(this.upsert(jsonData, options), callback)
    }
    options.upsert = true
    const script = this.creator.makeStatements(jsonData, options)
    return this.client.run(script)
  }

  destroyById (id, callback = NotSet) {
    if (callback !== NotSet) {
      return callbackify(this.destroyById(id), callback)
    }

    const ids = Array.isArray(id) ? id : [id]
    const script = this.destroyer.makeStatements(ids)
    return this.client.run(script)
  }

  parseDoc (doc, options) {
    // Parse options
    let includeNullFks = false
    if (options && Object.prototype.hasOwnProperty.call(options, 'includeNullFks')) {
      includeNullFks = options.includeNullFks
    }

    const parsed = {
      keyAndAttributeProperties: {},
      attributeProperties: {},
      keyProperties: {},
      readOnlyProperties: {},
      unknownProperties: {},
      subDocs: {}
    }

    _.forOwn(doc, (value, id) => {
      if (this.attributeIds.includes(id)) {
        if (this.propertyToType[id] === 'jsonb') {
          if (_.isArray(value)) {
            value = JSON.stringify(value)
          }
        }
        parsed.attributeProperties[id] = value
        parsed.keyAndAttributeProperties[id] = value
      } else {
        if (this.pkPropertyIds.includes(id)) {
          parsed.keyProperties[id] = value
          parsed.keyAndAttributeProperties[id] = value
        } else {
          if (id[0] === '_') {
            parsed.readOnlyProperties[id] = value
          } else {
            if (this.subDocIds.includes(id)) {
              parsed.subDocs[id] = value
            } else {
              parsed.unknownProperties[id] = value
            }
          }
        }
      }
    })

    if (includeNullFks) {
      this.fkPropertyIds.forEach(
        function (propertyId) {
          if (!Object.prototype.hasOwnProperty.call(parsed.attributeProperties, propertyId)) {
            parsed.attributeProperties[propertyId] = null
            parsed.keyAndAttributeProperties[propertyId] = null
          }
        }
      )
    }

    parsed.keyColumns = this.columnify(_.keys(parsed.keyProperties))
    parsed.keyValues = _.values(parsed.keyProperties)

    parsed.attributeColumns = this.columnify(_.keys(parsed.attributeProperties))
    parsed.attributeValues = _.values(parsed.attributeProperties)

    parsed.keyAndAttributeColumns = this.columnify(_.keys(parsed.keyAndAttributeProperties))
    parsed.keyAndAttributeValues = _.values(parsed.keyAndAttributeProperties)

    parsed.missingAttributeIds = _.difference(this.attributeIdsWithoutfkPropertyIds, _.keys(parsed.attributeProperties))
    parsed.missingAttributeColumnNames = this.columnify(parsed.missingAttributeIds)

    parsed.primaryKeyValues = {}
    this.pkPropertyIds.forEach(
      function (propertyId) {
        parsed.primaryKeyValues[propertyId] = doc[propertyId]
      }
    )

    return parsed
  }

  makeWhereFromId (id) {
    const ids = Array.isArray(id) ? id : [id]
    const where = {}
    this.pkPropertyIds.forEach(
      (propertyId, index) => {
        where[propertyId] = { equals: ids[index] }
      }
    )
    return where
  }

  extractPkValuesFromDoc (doc) {
    const pkValues = []
    this.pkPropertyIds.forEach(
      (propertyId) => {
        pkValues.push(doc[propertyId])
      }
    )
    return pkValues
  }

  debug () {
    console.log('')
    console.log('------------------- ' + this.fullModelId + '-------------------')
    console.log('  primaryKey: ' + JSON.stringify(this.pkPropertyIds))
    console.log('  propertyIds')
    this.propertyIds.forEach(propertyId => console.log('    + ' + propertyId))

    console.log('  Table')
    console.log('    fullTableName: ' + this.fullTableName)
    console.log('    primaryKey: ' + JSON.stringify(this.pkColumnNames))

    if (this.subDocIds.length > 0) {
      console.log('  SubDocs: ' + Object.keys(this.subModels).join())
    }
  } // debug
}

module.exports = Model
