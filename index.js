const express = require("express");
const cors = require("cors");
const app = express();

const indexRouter = require("./routes/index");

// allow cors on all routes
app.use(cors());

/* Allow us to parse body in post requests */
app.use(express.json());

/* import all defined routes */
app.use("/", indexRouter);

app.listen(8080, () => {
  console.log("I am listening ...");
});
