'use strict'

const getPreStatementHookFunction = require('./get-pre-statement-hook-function')

function getPostHookFunction (fullTableName, pk) {
  return function (result, ctx) {
    if (!Object.prototype.hasOwnProperty.call(ctx, 'lastCreatedPrimaryKey')) {
      ctx.lastCreatedPrimaryKey = {}
    }
    ctx.lastCreatedPrimaryKey[fullTableName] = pk
  }
}

class Updater {
  constructor (model) {
    this.model = model
    this.fullTableName = model.fullTableName
    this.prefix = 'UPDATE ' + this.fullTableName + ' SET '
  }

  makeStatements (jsonData, options) {
    const script = []

    this.makeUpdateStatement(jsonData, script, options)

    this.makeSubDocsStatements(jsonData, script, options)

    return script
  } // makeStatements

  addModifiedBy (parsedDoc) {
    if (this.model.modifiedByField) {
      parsedDoc.attributeColumns.push(this.model.modifiedByField)
      parsedDoc.attributeValues.push(this.model.currentUserFn())
    }
  } // addModifiedBy

  addModified (parsedDoc) {
    if (this.model.modifiedField) {
      parsedDoc.attributeColumns.push(this.model.modifiedField)
      parsedDoc.attributeValues.push(new Date())
    }
  } // addModified

  makeUpdateStatement (
    jsonData,
    script,
    options
  ) {
    const values = []

    const parsedDoc = this.model.parseDoc(jsonData)
    this.addModifiedBy(parsedDoc)
    this.addModified(parsedDoc)

    const set = []
    parsedDoc.attributeColumns.forEach(
      (column, index) => {
        values.push(parsedDoc.attributeValues[index])
        set.push(`${column}=$${index + 1}`)
      }
    )

    if (options.setMissingPropertiesToNull) {
      parsedDoc.missingAttributeColumnNames.forEach(
        column => set.push(`${column}=null`)
      )
    }

    const key = []
    parsedDoc.keyColumns.forEach(
      (column, index) => {
        values.push(parsedDoc.keyValues[index])
        key.push(`${column}=$${index + values.length}`)
      }
    )

    const sql = this.prefix + set.join(', ') + ' WHERE ' + key.join(' AND ')
    script.push(
      {
        sql: sql,
        params: values,
        postStatementHook: getPostHookFunction(this.fullTableName, parsedDoc.primaryKeyValues)
      }
    )
  } // makeUpdateStatement

  makeSubDocsStatements (
    jsonData,
    script,
    options
  ) {
    for (const [subModelId, subModel] of Object.entries(this.model.subModels)) {
      if (!Array.isArray(jsonData[subModelId])) {
        continue
      }

      makeSubDocUpsertsStatements(
        subModelId,
        subModel,
        jsonData,
        this.fullTableName,
        script,
        options
      )

      const subDocPkValues = jsonData[subModelId].map(row => subModel.model.extractPkValuesFromDoc(row))
      destroyMissingSubDocsStatement(subModel, subDocPkValues, script, options)
    } // for ...
  } // makeSubDocsStatements
} // class Updater

function makeSubDocUpsertsStatements (
  subModelId,
  subModel,
  jsonData,
  parentTableName,
  script,
  options
) {
  for (const row of jsonData[subModelId]) {
    // Add inferred FK columns
    for (const [childColumnsName, parentColumnsName] of Object.entries(subModel.columnJoin)) {
      row[childColumnsName] = jsonData[parentColumnsName]
    }

    options.upsert = true
    options.destroyMissingSubDocs = true
    const subScript = subModel.model.creator.makeStatements(
      row,
      options,
      getPreStatementHookFunction(parentTableName, subModel.columnJoin)
    )
    script.push(...subScript)
  }
}

function destroyMissingSubDocsStatement (
  subModel,
  subDocPkValues,
  script,
  options
) {
  if (!options.destroyMissingSubDocs) return

  if (subDocPkValues[0].length !== 1) {
    // TODO: Composite subdoc keys!
    throw new Error('Composite subdoc keys not supported!')
  }

  const firstPkValues = subDocPkValues.map(pkValues => pkValues[0])
  script.push({
    sql: subModel.model.deleteMissingSql,
    params: [firstPkValues]
  })
} // destroyMissingSubDocsStatement

module.exports = Updater
