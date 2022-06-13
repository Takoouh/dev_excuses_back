const express = require("express");
const router = express.Router();

const excusesController = require("../controllers/excusesController");

router.get("/", excusesController.getExcuses);

module.exports = router;
