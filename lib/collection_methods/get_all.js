'use strict'

const ensureCollection = require('../util/ensure_collection')

module.exports = async (db, { path }) => {
  ensureCollection(db, path)

  return db
    .get(path)
    .values()
    .value()
}
