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

  static removeTopLevelDoc (doc) {
    const topLevelKeys = Object.keys(doc)
    if (topLevelKeys.length === 1) {
      return doc[topLevelKeys[0]]
    }
  }

  static removeTopLevelDocAndFlatten (doc) {
    const topLevelDocs = Finder.removeTopLevelDoc(doc)
    if (Array.isArray(topLevelDocs) && topLevelDocs.length === 1) {
      return topLevelDocs[0]
    }
  }

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
    }
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
  }  // createSqlStatement
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

module.exports = Finder
