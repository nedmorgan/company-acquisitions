const {
    CompanySchema
} = require("../db/schema")

const mongoose = require("../db/connection")

module.exports = mongoose.model("Company", CompanySchema)