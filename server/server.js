const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoConnection = require("./mongodb");

const app = express();
const port = process.env.PORT || 5000;

mongoConnection.connect()

app.use(cors());
app.use(express.json());

app.use(require("./routes/routesConfig"));

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})