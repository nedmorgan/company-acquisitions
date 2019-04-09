const Company = require('../models/Company')
const Contact = require('../models/Contact')

const companyController = {
    index: (req, res) => {
        res.send('Index page for company')
    },
    create: (req, res) => {
        res.send('Action to create a new company')
    },
    show: (req, res) => {
        res.send("Page to show a company")
    },
    update: (req, res) => {
        res.send('Action to update a company')
    },
    delete: (req, res) => {
        res.send('Action to delete a company')
    }
}

module.exports = companyController