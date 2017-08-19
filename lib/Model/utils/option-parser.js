
const _ = require('lodash')

const expressionTypeFormatters = {
  equals: function (columnName, value, values) {
    values.push(value)
    return columnName + '= $' + values.length
  }
}

module.exports = function refineSql (sql, options) {
  const values = []

  if (options) {
    let parts

    // WHERE
    // -----
    if (options.hasOwnProperty('where')) {
      parts = []
      sql += ' WHERE '
      _.forOwn(
        options.where,
        function (expression, propertyId) {
          const columnName = _.kebabCase(propertyId).replace(/-/g, '_')
          const expressionType = _.keys(expression)[0]
          const param = _.values(expression)[0]
          parts.push(expressionTypeFormatters[expressionType](columnName, param, values))
        }
      )
      sql += parts.join(' AND ')
    }

    // ORDER BY
    // --------
    if (options.hasOwnProperty('orderBy')) {
      parts = []
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
          parts.push(_.kebabCase(propertyId).replace(/-/g, '_') + ' ' + direction)
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
}
