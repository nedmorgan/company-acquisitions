const mongoose = require("./connection")
const Schema = mongoose.Schema

const ContactSchema = new Schema({
  name: String,
  phoneNumber: String
})

const CompanySchema = new Schema({
  title: String,
  status: String,
  information: String,
  financialPerformance: String,
  contacts: [ContactSchema]
})

module.exports = {
  ContactSchema: ContactSchema,
  CompanySchema: CompanySchema
}