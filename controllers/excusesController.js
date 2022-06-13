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
  return res.status(200).json(excuses);
};

/**
 * @summary Add new excuse to excuses pool
 * @param {object} req
 * @param {Excuse} req.body
 * @return {Excuse[]} 200 - excuses as JSON
 */
exports.postExcuse = (req, res) => {
  const { body } = req;
  console.log("body", body);
  if (!body || !body.message) {
    return res.status(400).send("Missing excuses info");
  }
  const formattedExcuse = {
    tag: "user excuse",
    message: body.message,
  };
  excuses.push(formattedExcuse);
  return res.status(200).json(excuses);
};
