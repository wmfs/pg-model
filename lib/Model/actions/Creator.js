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
  }

  makeStatements (jsonData, options, preStatementHook) {
    const script = []

    const addInsertStatementToScript = (doc) => {
      const parsedDoc = this.model.parseDoc(doc, {includeNullFks: true})
      this.addCreatedBy(parsedDoc)
      let statement = `${this.prefix} (${parsedDoc.keyAndAttributeColumns.join(',')}) VALUES (${generateValuePlaceholders(parsedDoc.keyAndAttributeColumns.length)})`

      if (options.hasOwnProperty('upsert') && options.upsert) {
        const updateColumns = []
        const updatePlaceholders = []
        const whereParts = []
        let i = -1

        parsedDoc.keyAndAttributeColumns.forEach(columnName => {
          i++
          if (this.primaryKeyColumns.indexOf(columnName) === -1) {
            updateColumns.push(columnName)
            updatePlaceholders.push('$' + (i + 1))
          } else {
            whereParts.push('a.' + columnName + '=$' + (parsedDoc.keyAndAttributeColumns.indexOf(columnName) + 1))
          }
        })
        let setMissingPropertiesToNull
        if (options.hasOwnProperty('setMissingPropertiesToNull')) {
          setMissingPropertiesToNull = options.setMissingPropertiesToNull
        } else {
          setMissingPropertiesToNull = true
        }
        if (setMissingPropertiesToNull) {
          parsedDoc.missingAttributeColumnNames.forEach(column => {
            updateColumns.push(column)
            updatePlaceholders.push('null')
          })
        }
        let conflictClause
        if (updateColumns.length > 0 && whereParts.length > 0) {
          conflictClause = ` ON CONFLICT (${this.primaryKeyColumns.join(', ')}) DO UPDATE SET (${updateColumns.join(',')})=(${updatePlaceholders.join(',')}) WHERE ${whereParts.join(' AND ')}`
        } else {
          conflictClause = ' ON CONFLICT DO NOTHING'
        }
        statement += conflictClause
      }

      statement += ` RETURNING ${this.primaryKeyColumns.join(', ')};`

      const scriptEntry = {
        sql: statement,
        params: parsedDoc.keyAndAttributeValues,
        columnNames: parsedDoc.keyAndAttributeColumns,
        postStatementHook: createPostStatementHook.bind(this)
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
    }

    if (_.isArray(jsonData)) {
      jsonData.forEach(
        addInsertStatementToScript
      )
    } else {
      addInsertStatementToScript(jsonData)
    }
    return script
  } // addStatements

  addCreatedBy(parsedDoc) {
    if (this.model.createdByField) {
      parsedDoc.keyAndAttributeColumns.push(this.model.createdByField)
      parsedDoc.keyAndAttributeValues.push(this.model.currentUserFn())
    }
  }
}

module.exports = Creator
