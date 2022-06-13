const excuses = require("../data/excuses.json");

/**
 * Excuse definition
 * @typedef {object} Excuse
 * @property {number} http_code
 * @property {string} tag
 * @property {strung} message
 */

/**
 * @summary Retrieve all Excuses
 * @return {Excuse[]} 200 - excuses as JSON
 */
exports.getExcuses = (req, res) => {
  res.status(200).json(excuses);
};
