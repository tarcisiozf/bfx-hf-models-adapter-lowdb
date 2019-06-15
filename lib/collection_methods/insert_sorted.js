const binSearchInsert = require('binary-search-insert')

module.exports = async (db, { path }, sort, doc) => {
  const allDocs = db.get(path).value()

  const { dir, key: sortKey } = sort
  const comp = dir === 'asc'
    ? (a, b) => a[sortKey] - b[sortKey]
    : (a, b) => b[sortKey] - a[sortKey]

  binSearchInsert(allDocs, comp, doc)

  db.set(path, allDocs)

  return doc
}
