'use strict'

const create = require('./create')
const update = require('./update')
const getAll = require('./get_all')
const find = require('./find')
const get = require('./get')
const set = require('./set')
const rmAll = require('./rm_all')
const rm = require('./rm')

module.exports = {
  create,
  update,
  getAll,
  find,
  get,
  set,
  rmAll,
  rm
}
