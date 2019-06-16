'use strict'

const ensureMap = require('../util/ensure_map')
const idFromDocOrID = require('../util/id_from_doc_or_id')

module.exports = async (db, { mapKey, path }, docOrID, value) => {
  ensureMap(db, path)

  const id = idFromDocOrID(mapKey, docOrID)
  const fullPath = `${path}.${id}`
  const v = db.get(fullPath).value()

  if (!v) {
    throw new Error(`value does not exist: ${fullPath}`)
  }

  db.set(fullPath, {
    ...v,
    ...value
  }).write()

  return 1 // updated rows
}
