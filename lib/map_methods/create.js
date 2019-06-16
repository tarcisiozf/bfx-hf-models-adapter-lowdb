'use strict'

const ensureMap = require('../util/ensure_map')

module.exports = async (db, { mapKey, path }, data) => {
  ensureMap(db, path)

  const fullPath = `${path}.${mapKey(data)}`

  if (db.get(fullPath).value()) {
    throw new Error(`${fullPath} already exists, cannot create`)
  }

  db.set(fullPath, data).write()

  return db.get(fullPath).value()
}
