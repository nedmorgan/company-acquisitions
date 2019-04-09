const Contact = require('../models/Contact')
const Company = require('../models/Company')

const contactController = {
    index: (req, res) => {
        Company.findById(req.params.companyId)
            .then(company => {
                res.json(company.contacts)
            })
            .catch((err) => {
                console.log("Error retreiving contacts: ", err)
            })
    },
    create: (req, res) => {
        res.send('Action to create a contact')
    },
    show: (req, res) => {
        Company.findById(req.params.companyId)
            .then(company => {
                const specificContact = company.contacts.filter(contact => contact._id.toString() === req.params.contactId)
                res.json(specificContact)
            }).catch((err) => {
                console.log("Error finding specific contact: ", err)
            })
    },
    update: (req, res) => {
        res.send('Action to update a contact')
    },
    delete: (req, res) => {
        res.send('Action to delete a contact')
    }
}

module.exports = contactController