'use strict'

const ensureMap = require('../util/ensure_map')

module.exports = async (db, { path }) => {
  ensureMap(db, path)

  return db.get(path).value()
}
