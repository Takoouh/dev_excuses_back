const express = require("express");
const app = express();

const indexRouter = require("./routes/index");

/* Allow us to parse body in post requests */
app.use(express.json());

/* import all defined routes */
app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("I am listening ...");
});
