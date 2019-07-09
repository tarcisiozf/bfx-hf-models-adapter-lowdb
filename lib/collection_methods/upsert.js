'use strict'

const ensureCollection = require('../util/ensure_collection')

module.exports = async (db, { path, index, indexMatches}, doc) => {
  if (!index) {
    throw new Error('can\'t upsert, model missing index')
  }

  ensureCollection(db, path)

  const collection = db.get(path).values()
  const existingIndex = collection.findIndex((d) => {
    for (let i = 0; i < indexMatches.length; i += 1) {
      if (d[indexMatches[i]] !== doc[indexMatches[i]]) {
        return false
      }
    }

    return true
  })

  if (existingIndex >= 0) {
    collection[existingIndex] = doc
  } else {
    collection.push(doc)
  }

  db.set(path, collection).write()

  return doc
}
