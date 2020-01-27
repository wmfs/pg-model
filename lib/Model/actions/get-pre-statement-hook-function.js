const _ = require('lodash')

module.exports = function getPreStatementHookFunction (parentFullTableName, columnJoin) {
  return function preStatementHook (scriptEntry, ctx) {
    const parentPkValues = ctx.lastCreatedPrimaryKey[parentFullTableName]
    const fkValuesToAutoFill = {}
    _.forOwn(
      columnJoin,
      function (childColumnName, parentColumnName) {
        fkValuesToAutoFill[parentColumnName] = parentPkValues[childColumnName]
      }
    )

    const scriptEntryColumnNames = scriptEntry.columnNames
    const scriptEntryValues = scriptEntry.params
    let scriptEntryColumnName
    for (let i = 0; i < scriptEntryColumnNames.length; i++) {
      scriptEntryColumnName = scriptEntryColumnNames[i]
      if (Object.prototype.hasOwnProperty.call(fkValuesToAutoFill, scriptEntryColumnName)) {
        scriptEntryValues[i] = fkValuesToAutoFill[scriptEntryColumnName]
      }
    }
  }
}
