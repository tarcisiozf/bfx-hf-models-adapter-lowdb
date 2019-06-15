module.exports = async (db, { path }, doc) => {
  db.get(path).push(doc).write()

  return doc
}
