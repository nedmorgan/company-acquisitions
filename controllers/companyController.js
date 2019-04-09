const Company = require('../models/Company')
const Contact = require('../models/Contact')

const companyController = {
    index: (req, res) => {
        Company.find().then((company) => {
            res.json(company)
        }).catch((err) => {
            console.log('Error finding company: ', err)
        })
    },
    create: (req, res) => {
        res.send('Action to create a new company')
    },
    show: (req, res) => {
        Company.findById(req.params.companyId).then((company) => {
            res.json(company)
        }).catch((err) => {
            console.log('Error finding specific company: ', err)
        })
    },
    update: (req, res) => {
        res.send('Action to update a company')
    },
    delete: (req, res) => {
        res.send('Action to delete a company')
    }
}

module.exports = companyController