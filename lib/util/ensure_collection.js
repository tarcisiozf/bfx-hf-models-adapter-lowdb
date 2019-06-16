/**
 * Creates an empty collection at the path if none exists
 *
 * @param {LowDB} db
 * @param {string} path
 */
module.exports = (db, path) => {
  if (!db.get(path).value()) {
    db.set(path, []).write()
  }
}