const expressionTypeFormatters = {
  equals: function (columnName, value, values) {
    values.push(value)
    return columnName + ' = $' + values.length
  },
  notEquals: function (columnName, value, values) {
    values.push(value)
    return columnName + ' != $' + values.length
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
  },
  isNull: function (columnName, value) {
    return value === true ? columnName + ' is null' : columnName + ' is not null'
  }
}

module.exports = function refineSql (sql, propertyIdToColumn, options) {
  const values = []

  if (options) {
    // WHERE
    // -----
    if (Object.prototype.hasOwnProperty.call(options, 'where') && Object.keys(options.where).length) {
      sql += buildWhereClause(options.where, propertyIdToColumn, values)
    }

    // ORDER BY
    // --------
    if (Object.prototype.hasOwnProperty.call(options, 'orderBy') && options.orderBy.length) {
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
    if (Object.prototype.hasOwnProperty.call(options, 'limit')) {
      sql += ' LIMIT ' + options.limit
    }

    // OFFSET
    // ------
    if (Object.prototype.hasOwnProperty.call(options, 'offset')) {
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
    const expressionType = Object.keys(expression)[0]
    const formatter = expressionTypeFormatters[expressionType]
    const param = Object.values(expression)[0]

    if (!Array.isArray(param)) {
      parts.push(formatter(columnName, param, values))
    } else {
      const subclauseParts = param
        .map(p => formatter(columnName, p, values))
      const subclause = `(${subclauseParts.join(' OR ')})`
      parts.push(subclause)
    }
  } // for ...

  return ` WHERE ${parts.join(' AND ')}`
} // buildWhereClause
