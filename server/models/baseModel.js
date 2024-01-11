const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function createSchema(collectionName, properties) {
    if (typeof collectionName !== "string") {
        return new Error("Collection name must be a string");
    }

    const newSchema = new Schema(properties, { timestamps: true });

    const createdSchema = mongoose.model(collectionName, newSchema);
    return createdSchema;
}

module.exports = { createSchema };