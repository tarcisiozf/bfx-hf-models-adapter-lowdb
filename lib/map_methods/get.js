'use strict'

const ensureMap = require('../util/ensure_map')
const _isObject = require('lodash/isObject')

module.exports = async (db, { mapKey, path }, docOrID) => {
  ensureMap(db, path)

  const id = _isObject(docOrID)
    ? mapKey(docOrID)
    : docOrID

  return db.get(`${path}.${id}`)
}
