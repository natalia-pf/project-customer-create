const baseModel = require("./baseModel");

const collectionName = "Customer";
const properties = {
    Name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    Email: { 
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 10
    },
    PhoneNumber: { 
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    DocumentNumber: { 
        type: String,
        required: true,
        trim: true,
        minlength: 14
    },
    Address: { 
        type: String,
        required: true,
        trim: true,
        minlength: 15
    }
}

module.exports = baseModel.createSchema(collectionName, properties);