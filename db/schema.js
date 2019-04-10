const mongoose = require("./connection")
const Schema = mongoose.Schema

const CompanySchema = new Schema({
  name: String,
  status: String,
  information: String,
  financialPerformance: String,
  contact: String,
  contactTitle: String,
  phoneNumber: String,
})

module.exports = {
  CompanySchema: CompanySchema
}