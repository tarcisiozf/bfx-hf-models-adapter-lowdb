const verifyCriteria = require('../util/verify_criteria')

module.exports = async (db, { path }, criteria = [], data) => {
  const v = db
    .get(path)
    .find(doc => {
      return verifyCriteria(doc, criteria)
    })
    .assign(data)
    .value()

  db.write()

  return v
}
