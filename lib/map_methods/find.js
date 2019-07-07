'use strict'

const ensureMap = require('../util/ensure_map')
const verifyCriteria = require('../util/verify_criteria')

module.exports = async (db, { path }, criteria) => {
  ensureMap(db, path)

  const documents = db.get(path).values().value()

  return documents.filter(doc => verifyCriteria(doc, criteria))
}
