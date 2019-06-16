'use strict'

const ensureCollection = require('../util/ensure_collection')
const verifyCriteria = require('../util/verify_criteria')

module.exports = async (db, { path }, criteria = [], data) => {
  ensureCollection(db, path)

  let modified = 0

  db
    .get(path)
    .filter(doc => {
      const valid = verifyCriteria(doc, criteria)

      if (valid) {
        modified += 1
      }

      return valid
    })
    .each(doc => {
      Object.assign(doc, data)
    })
    .write()

  return modified
}
