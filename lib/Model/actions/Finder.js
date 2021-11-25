'use strict'

const optionParser = require('./../../utils/option-parser')

class Finder {
  constructor (model) {
    this.model = model
    this.modelId = model.modelId
    this.propertyIdToColumn = model.propertyIdToColumn
    this.subModels = model.subModels
    this.fkConstraints = model.fkConstraints
    this.client = model.client
  }

  async findAll (options) {
    const doc = await this.find({}, options)
    return removeTopLevelDoc(doc)
  } // findAll

  async findOne (options) {
    const doc = await this.find({}, options)
    return removeTopLevelDocAndFlatten(doc)
  } // findOne

  async search (options = {}) {
    const page = options.page || 1
    const limit = options.limit || 10
    const offset = Number.isInteger(options.offset)
      ? options.offset
      : (page - 1) * limit

    const where = options.where || {}

    const filters = {
      where,
      offset,
      limit,
      fields: options.fields || [],
      orderBy: options.orderBy || [],
      nullsLast: options.nullsLast || false
    }

    const totalHits = await this.findCount({ where })
    const results = await this.findAll(filters)

    const totalPages = Math.ceil(totalHits / limit)

    return {
      page,
      totalPages,
      results,
      totalHits
    }
  } // search

  async findCount (options = {}) {
    const sqlSelect = `SELECT COUNT(*) FROM ${this.model.fullTableName}`
    const parsedOptions = optionParser(sqlSelect, this.propertyIdToColumn, options)
    const result = await this.client.query(parsedOptions.sql, parsedOptions.values)
    return result && result.rows && result.rows.length
      ? +result.rows[0].count
      : 0
  } // findCount

  async find (targetRoot, options) {
    const sqlSelect = this.createSqlSelect(options)
    const parsedOptions = optionParser(sqlSelect, this.propertyIdToColumn, options)

    const result = await this.client.query(
      parsedOptions.sql,
      parsedOptions.values
    )

    targetRoot[this.modelId] = result.rows

    // search for submodels
    for (const subModel of Object.values(this.subModels)) {
      for (const row of targetRoot[this.modelId]) {
        const where = makeSubModelWhere(subModel, row)

        await subModel.model.finder.find(
          row,
          { where: where }
        )
      }
    } // for ...

    return targetRoot
  } // find

  createSqlSelect (options) {
    const filter = Array.isArray(options.fields)
      ? ([col, prop]) => options.fields.includes(prop)
      : () => true

    const columnNamesWithPropertyAliases =
      Object.entries(this.model.columnToPropertyId)
        .filter(filter)
        .map(([col, prop]) => `${col} AS "${prop}"`)

    return `SELECT ${columnNamesWithPropertyAliases} FROM ${this.model.fullTableName}`
  } // createSqlStatement
} // class Finder

function makeSubModelWhere (subModel, row) {
  const where = {}
  subModel.sourceProperties.forEach(
    (sourcePropertyId, index) => {
      const targetPropertyId = subModel.targetProperties[index]
      where[sourcePropertyId] = { equals: row[targetPropertyId] }
    }
  )
  return where
} // makeSubModelWhere

function removeTopLevelDoc (doc) {
  const topLevelKeys = Object.keys(doc)
  if (topLevelKeys.length === 1) {
    return doc[topLevelKeys[0]]
  }
}

function removeTopLevelDocAndFlatten (doc) {
  const topLevelDocs = removeTopLevelDoc(doc)
  if (Array.isArray(topLevelDocs) && topLevelDocs.length === 1) {
    return topLevelDocs[0]
  }
}

module.exports = Finder
