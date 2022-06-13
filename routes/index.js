const express = require("express");
const router = express.Router();

const excusesRouter = require("./excusesRoutes");

router.use("/excuses", excusesRouter);

module.exports = router;
