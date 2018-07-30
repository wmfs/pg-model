'use strict'

const _ = require('lodash')
const getPreStatementHookFunction = require('./get-pre-statement-hook-function')

function generateValuePlaceholders (l) {
  const parts = []
  for (let i = 1; i <= l; i++) {
    parts.push('$' + i)
  }
  return parts.join(',')
}

class Creator {
  constructor (model) {
    this.model = model
    this.fullTableName = model.fullTableName
    this.prefix = 'INSERT INTO ' + this.fullTableName + ' AS a'
    this.primaryKeyColumns = model.pkColumnNames
    this.returning = ` RETURNING ${this.primaryKeyColumns.join(', ')};`
  }

  makeStatements (jsonData, options, preStatementHook) {
    const script = []
    if (Array.isArray(jsonData)) {
      jsonData.forEach(jD => this.addInsertStatementToScript(script, jD, options, preStatementHook))
    } else {
      this.addInsertStatementToScript(script, jsonData, options, preStatementHook)
    }
    return script
  } // addStatements

  addInsertStatementToScript (script, doc, options, preStatementHook) {
    const parsedDoc = this.model.parseDoc(doc, {includeNullFks: true})

    const statement =
      this.insertStatement(parsedDoc) +
      this.upsertStatement(parsedDoc, options) +
      this.returningStatement()

    const scriptEntry = {
      sql: statement,
      params: parsedDoc.keyAndAttributeValues,
      columnNames: parsedDoc.keyAndAttributeColumns,
      postStatementHook: this.postCreateStatementHook.bind(this)
    }

    if (preStatementHook) {
      scriptEntry.preStatementHook = preStatementHook.bind(this)
    }

    script.push(scriptEntry)

    _.forOwn(parsedDoc.subDocs, (subDoc, propertyId) => {
      const subModel = this.model.subModels[propertyId]

      const subScript = subModel.model.creator.makeStatements(
        doc[propertyId],
        options,
        getPreStatementHookFunction(this.fullTableName, subModel.columnJoin)
      )
      script.push(...subScript)
    })
  } // addInsertStatementsToScript

  insertStatement (parsedDoc) {
    this.pushCreatedBy(parsedDoc)
    return `${this.prefix} (${parsedDoc.keyAndAttributeColumns.join(',')}) VALUES (${generateValuePlaceholders(parsedDoc.keyAndAttributeColumns.length)})`
  } // insertStatement

  upsertStatement (parsedDoc, options) {
    if (!(options.hasOwnProperty('upsert') && options.upsert)) {
      return ''
    }

    const updateColumns = []
    const updatePlaceholders = []
    const whereParts = []
    let i = -1

    for (const columnName of parsedDoc.keyAndAttributeColumns) {
      i++

      if (this.model.createdByField === columnName) {
        continue
      }

      if (this.primaryKeyColumns.indexOf(columnName) === -1) {
        updateColumns.push(columnName)
        updatePlaceholders.push('$' + (i + 1))
      } else {
        whereParts.push('a.' + columnName + '=$' + (parsedDoc.keyAndAttributeColumns.indexOf(columnName) + 1))
      }
    } // for ...

    if (this.model.modifiedByField && whereParts.length > 0) {
      updateColumns.push(this.model.modifiedByField)
      parsedDoc.keyAndAttributeValues.push(this.model.currentUserFn())
      updatePlaceholders.push('$' + (parsedDoc.keyAndAttributeValues.length))
    }

    const setMissingPropertiesToNull = (options.hasOwnProperty('setMissingPropertiesToNull'))
      ? options.setMissingPropertiesToNull
      : true

    if (setMissingPropertiesToNull) {
      parsedDoc.missingAttributeColumnNames.forEach(column => {
        updateColumns.push(column)
        updatePlaceholders.push('null')
      })
    }

    const conflictClause = (updateColumns.length > 0 && whereParts.length > 0)
      ? ` ON CONFLICT (${this.primaryKeyColumns.join(', ')}) DO UPDATE SET (${updateColumns.join(',')})=(${updatePlaceholders.join(',')}) WHERE ${whereParts.join(' AND ')}`
      : ' ON CONFLICT DO NOTHING'

    return conflictClause
  } // upsertStatement

  returningStatement () {
    return this.returning
  } // returningStatement

  pushCreatedBy (parsedDoc) {
    if (this.model.createdByField) {
      parsedDoc.keyAndAttributeColumns.push(this.model.createdByField)
      parsedDoc.keyAndAttributeValues.push(this.model.currentUserFn())
    }
  } // pushCreatedBy

  postCreateStatementHook (result, ctx) {
    if (!ctx.hasOwnProperty('returnValue')) {
      const returnValue = {}
      _.forOwn(result.rows[0], (value, columnName) => {
        returnValue[_.camelCase(columnName)] = value
      })
      ctx.returnValue = {
        idProperties: returnValue
      }
    }
    if (!ctx.hasOwnProperty('lastCreatedPrimaryKey')) {
      ctx.lastCreatedPrimaryKey = {}
    }
    ctx.lastCreatedPrimaryKey[this.fullTableName] = result.rows[0]
  } // postCreateStatementHook
} // class Creator

module.exports = Creator
