const express = require("express");
const router = express.Router();

const excusesController = require("../controllers/excusesController");

router.get("/", excusesController.getExcuses);
router.post("/", excusesController.postExcuse);

module.exports = router;
