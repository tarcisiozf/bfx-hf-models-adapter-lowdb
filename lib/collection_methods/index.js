'use strict'

const find = require('./find')
const update = require('./update')
const insert = require('./insert')
const insertSorted = require('./insert_sorted')

module.exports = {
  find,
  update,
  insert,
  insertSorted,
}
