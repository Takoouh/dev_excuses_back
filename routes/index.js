const express = require("express");
const router = express.Router();

const excusesRouter = require("./excusesRoutes");

/* gather and use routes */
router.use("/excuses", excusesRouter);

module.exports = router;
