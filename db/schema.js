const mongoose = require("./connection")
const Schema = mongoose.Schema

const ContactSchema = new Schema({
  contact: String,
  title: String,
  phoneNumber: String,
  email: String,
})

const CompanySchema = new Schema({
  name: String,
  status: String,
  information: String,
  financialPerformance: String,
  contacts: [ContactSchema]
})

module.exports = {
  CompanySchema: CompanySchema,
  ContactSchema: ContactSchema
}