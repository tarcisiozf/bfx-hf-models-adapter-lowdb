'use strict'

const debug = require('debug')('bfx:hf:models:adapter-lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const _isString = require('lodash/isString')
const _isObject = require('lodash/isObject')
const _isEmpty = require('lodash/isEmpty')
const lowdb = require('lowdb')

const mapMethods = require('./lib/map_methods')
const genericMethods = require('./lib/generic_methods')
const collectionMethods = require('./lib/collection_methods')

module.exports = ({
  dbPath,
  defaultData,
  backend = FileSync,
}) => {
  if (!_isString(dbPath) || _isEmpty(dbPath)) {
    throw new Error('DB path required')
  }

  debug('loading from %s', dbPath)

  const db = lowdb(new backend(dbPath))

  if (_isObject(defaultData) && !_isEmpty(defaultData)) {
    db.defaults(defaultData).write()
  }

  const close = db.write.bind(db) // can't close lowdb, just flush changes

  return {
    db,
    close,
    mapMethods,
    collectionMethods,
    genericMethods,
    name: 'LowDB'
  }
}
