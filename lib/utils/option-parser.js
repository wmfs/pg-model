const _ = require('lodash')

const expressionTypeFormatters = {
  equals: function (columnName, value, values) {
    values.push(value)
    return columnName + ' = $' + values.length
  },
  moreThan: function (columnName, value, values) {
    values.push(value)
    return columnName + ' > $' + values.length
  },
  lessThan: function (columnName, value, values) {
    values.push(value)
    return columnName + ' < $' + values.length
  },
  moreThanEquals: function (columnName, value, values) {
    values.push(value)
    return columnName + ' >= $' + values.length
  },
  lessThanEquals: function (columnName, value, values) {
    values.push(value)
    return columnName + ' <= $' + values.length
  },
  like: function (columnName, value, values) {
    values.push(`%${value}%`)
    return columnName + '::text LIKE $' + values.length
  }
}

module.exports = function refineSql (sql, propertyIdToColumn, options) {
  const values = []

  if (options) {
    // WHERE
    // -----
    if (options.hasOwnProperty('where')) {
      sql += buildWhereClause(options.where, propertyIdToColumn, values)
    }

    // ORDER BY
    // --------
    if (options.hasOwnProperty('orderBy')) {
      const parts = []
      sql += ' ORDER BY '
      options.orderBy.forEach(
        function (propertyId) {
          let direction
          if (propertyId[0] === '-') {
            direction = 'DESC'
            propertyId = propertyId.substring(1)
          } else {
            direction = 'ASC'
          }
          parts.push(propertyIdToColumn[propertyId] + ' ' + direction)
        }
      )
      sql += parts.join(', ')
      if (options.nullsLast) {
        sql += ' NULLS LAST'
      }
    }

    // LIMIT
    // -----
    if (options.hasOwnProperty('limit')) {
      sql += ' LIMIT ' + options.limit
    }

    // OFFSET
    // ------
    if (options.hasOwnProperty('offset')) {
      sql += ' OFFSET ' + options.offset
    }
  }

  return {
    sql: sql,
    values: values
  }
} // refineSql

function buildWhereClause (where, propertyIdToColumn, values) {
  const parts = []

  for (const [propertyId, expression] of Object.entries(where)) {
    const columnName = propertyIdToColumn[propertyId]
    const expressionType = _.keys(expression)[0]
    const param = _.values(expression)[0]
    parts.push(expressionTypeFormatters[expressionType](columnName, param, values))
  }

  return ` WHERE ${parts.join(' AND ')}`
} // buildWhereClause
