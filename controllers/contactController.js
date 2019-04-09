const Contact = require('../models/Contact')

const contactController = {
    index: (req, res) => {
        res.send('Index page for contact')
    },
    create: (req, res) => {
        res.send('Action to create a contact')
    },
    show: (req, res) => {
        res.send("Page to show a contact")
    },
    update: (req, res) => {
        res.send('Action to update a contact')
    },
    delete: (req, res) => {
        res.send('Action to delete a contact')
    }
}

module.exports = contactController