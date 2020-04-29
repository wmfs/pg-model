'use strict'

class Destroyer {
  constructor (model) {
    this.fullTableName = model.fullTableName

    const where = model.pkColumnNames.map((name, index) => `${name}=$${index + 1}`)

    this.sql = `DELETE FROM ${this.fullTableName} WHERE ${where.join(' AND ')}`
  }

  makeStatements (id, options) {
    return [
      {
        sql: this.sql,
        params: id
      }
    ]
  }
}

module.exports = Destroyer
