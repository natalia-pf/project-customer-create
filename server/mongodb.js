const mongoose = require("mongoose");

function connect() {
    console.log(" entrou")
    const uri = process.env.ATLAS_URI;

    console.log(uri)
    mongoose.connect(uri, { useNewUrlParser: true })

    const connection = mongoose.connection;
    connection.once("open", () => { console.log("MongoDb connected") });
}

module.exports = { connect }