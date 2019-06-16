'use strict'

const ensureMap = require('../util/ensure_map')
const _isObject = require('lodash/isObject')

module.exports = async (db, { mapKey, path }, docOrID) => {
  ensureMap(db, path)

  const id = _isObject(docOrID)
    ? mapKey(docOrID)
    : docOrID

  const fullPath = `${path}.${id}`
  const v = db.get(fullPath)

  if (!v) {
    throw new Error(`value does not exist: ${fullPath}`)
  }

  return db.unset(`${path}.${id}`)
}
