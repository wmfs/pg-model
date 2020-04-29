module.exports = function getPreStatementHookFunction (parentFullTableName, columnJoin) {
  return function preStatementHook (scriptEntry, ctx) {
    const parentPkValues = ctx.lastCreatedPrimaryKey[parentFullTableName]
    const fkValuesToAutoFill = {}

    for (const [parentColumnName, childColumnName] of Object.entries(columnJoin)) {
      fkValuesToAutoFill[parentColumnName] = parentPkValues[childColumnName]
    }

    const scriptEntryColumnNames = scriptEntry.columnNames
    const scriptEntryValues = scriptEntry.params

    scriptEntryColumnNames.forEach((columnName, index) => {
      if (Object.prototype.hasOwnProperty.call(fkValuesToAutoFill, columnName)) {
        scriptEntryValues[index] = fkValuesToAutoFill[columnName]
      }
    })
  }
}
