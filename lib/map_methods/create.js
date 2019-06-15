module.exports = async (db, { path }, key, data) => {
  const fullPath = `${path}.${key}`

  // TODO: Error ok here?
  if (db.get(fullPath)) {
    throw new Error(`[${name}] ${key} already exists, cannot create`)
  }

  db.set(fullPath, data).write()

  return db.get(fullPath)
}
