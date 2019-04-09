const {
    ContactSchema
} = require("../db/schema")

const mongoose = require("../db/connection")

module.exports = mongoose.model("Contact", ContactSchema)