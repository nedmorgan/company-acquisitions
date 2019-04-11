require("dotenv").config()
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI)

const Company = require("../models/Company")
const Contact = require("../models/Contact")

const elon = new Contact({
    contact: 'Elon Musk',
    title: 'CEO',
    phoneNumber: '404-867-5309',
    email: 'elon@tesla.com'
})

const walter = new Contact({
    contact: 'Walter Morgan',
    title: 'CFO',
    phoneNumber: '203-838-9693',
    email: 'walter@backyarddogs.com'
})

const betsy = new Contact({
    contact: 'Betsy Morgan',
    title: 'CTO',
    phoneNumber: '404-867-5309',
    email: 'betsy@backyarddog.com'
})

const tesla = new Company({
    name: 'Tesla',
    status: 'Researching',
    information: 'An American multinational corporation that specializes in electric vehicles, energy storage and solar panel manufacturing based in Palo Alto, California.',
    financialPerformance: `From 2007 to 2014, Tesla showed a gross margin ranging from 87.67% in 2007 to -7.74% in 2008, and the average gross margin was 25.3%. For the trailing 12-month period ending on Sept. 30, 2015, the company's gross margin stood at 25.52%.`,
    contacts: [elon]
})

const backyard = new Company({
    name: 'Backyard Dog Products',
    status: 'Pending Approval',
    information: 'An American corporation that specializes in creating fun and interactive dog toys and healthy food options',
    financialPerformance: `Since the company's inception in 2015 Backyard has shwon a gross margin ranging from -25.82% in 2015 to 13.65% in 2018. The company is currently on an upward trajectory and will be expanding into several new Western markets in Q3 of 2019.`,
    contacts: [walter, betsy]
})

Company.deleteMany({})
    .then(() => tesla.save())
    .then(() => backyard.save())
    .then(() => console.log('Things have been saved to MongoDB'))
    .then(() => mongoose.connection.close())