'use strict'

const ensureCollection = require('../util/ensure_collection')

module.exports = async (db, { path }) => {
  ensureCollection(db, path)

  const nRows = db.get(path).value().length

  db.set(path, []).write()

  return nRows
}
