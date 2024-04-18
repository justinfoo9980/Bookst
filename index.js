require("express-async-errors");
// try to get cors
const cors = require("cors");
//
const express = require("express");
const app = express();
app.use(cors());

require("./startup/config")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/validation")();

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
