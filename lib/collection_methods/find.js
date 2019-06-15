const verifyCriteria = require('../util/verify_criteria')

module.exports = async (db, { path }, criteria = []) => {
  return db
    .get(path)
    .filter(doc => {
      return verifyCriteria(doc, criteria)
    })
    .values()
    .value()
}
