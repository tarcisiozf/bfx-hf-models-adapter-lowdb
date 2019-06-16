const _isObject = require('lodash/isObject')

/**
 * Generates a key from a partial document, or returns the ID if provided
 *
 * @param {function} mapKey - must generate a valid key from a partial document
 * @param {Object|string} docOrID - document or ID
 * @return {string} ID
 */
module.exports = (mapKey, docOrID) => {
  return _isObject(docOrID)
    ? mapKey(docOrID)
    : docOrID
}
