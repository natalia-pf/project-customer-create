const express = require("express");
const app = express.Router();

app.use("/customer", require("./customer"));

module.exports = app;