'use strict'

const ensureCollection = require('../util/ensure_collection')
const verifyCriteria = require('../util/verify_criteria')

module.exports = async (db, { path }, criteria, { key, start, end }) => {
  ensureCollection(db, path)

  return db
    .get(path)
    .filter(doc => {
      return verifyCriteria(doc, criteria) && (
        doc[key] >= start && doc[key] <= end
      )
    })
    .values()
}
