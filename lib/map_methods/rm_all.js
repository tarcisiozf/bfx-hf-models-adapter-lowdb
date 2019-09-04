'use strict'

const ensureMap = require('../util/ensure_map')

module.exports = async (db, { mapKey, path }) => {
  ensureMap(db, path)
  db.unset(path).write()
}
