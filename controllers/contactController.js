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
        Company.findById(req.params.companyId)
            .then(company => {
                const newContact = new Contact(req.body)
                company.contacts.push(newContact)
                company.save()
                    .then(company => {
                        res.json(company)
                    })
            }).catch((err) => {
                console.log("Error adding a new contact: ", err)
            })
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
        const updatedContact = req.body
        const contact = req.params.contactId
        Company.findById(req.params.companyId)
            .then(company => {
                Contact.findByIdAndUpdate(contact, updatedContact, {
                    new: true
                }).then((contact) => {
                    res.json(contact)
                })
            }).catch((err) => {
                console.log("Error updating contact: ", err)
            })
    },
    delete: (req, res) => {
        Company.findById(req.params.companyId)
            .then(company => {
                const specificContacts = company.contacts.filter(contact => contact._id.toString() !== req.params.contactId)
                company.contacts = specificContacts
                company.save().then(company => {
                    res.json(company.contacts)
                })
            }).catch((err) => {
                console.log("Error removing a company contact: ", err)
            })
    }
}

module.exports = contactController