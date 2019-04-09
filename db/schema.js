const mongoose = require("./connection")
const Schema = mongoose.Schema

const ContactSchema = new Schema({
  name: String,
  phoneNumber: String,
  title: String,
})

const CompanySchema = new Schema({
  name: String,
  status: String,
  information: String,
  financialPerformance: String,
  contacts: [ContactSchema],
})

module.exports = {
  ContactSchema: ContactSchema,
  CompanySchema: CompanySchema
}