'use strict'

const ensureMap = require('../util/ensure_map')
const _isObject = require('lodash/isObject')

module.exports = async (db, { mapKey, path }, docOrID, value) => {
  ensureMap(db, path)

  const id = _isObject(docOrID)
    ? mapKey(docOrID)
    : docOrID

  db.set(`${path}.${id}`, value).write()
}
