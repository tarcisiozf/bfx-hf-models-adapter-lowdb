'use strict'

const ensureCollection = require('../util/ensure_collection')
const verifyCriteria = require('../util/verify_criteria')

module.exports = async (db, { path }, criteria, {
  key,
  start,
  end
}, { orderBy, orderDirection } = {}) => {
  ensureCollection(db, path)

  const values = db
    .get(path)
    .filter(doc => {
      return verifyCriteria(doc, criteria) && (
        doc[key] >= start && doc[key] <= end
      )
    })
    .values()
    .value()

  if (orderBy && orderDirection) {
    values.sort((a, b) => {
      return orderDirection === 'desc'
        ? b[orderBy] - a[orderBy]
        : a[orderBy] - b[orderBy]
    })
  }

  return values
}
