const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController')
const contactController = require('../controllers/contactController')

// Company Controller

// Show the main company index page
router.get('/companies', companyController.index)

// Action to create a new company in the database
router.post('/companies', companyController.create)

// Show an individual company
router.get('/companies/:companyId', companyController.show)

// Update a company in the database
router.put('/companies/:companyId', companyController.update)

// Delete a company from the database
router.delete('/companies/:companyId', companyController.delete)

// Contact Controller

// Show the contacts for a specific company
router.get('/companies/:companyId/contacts', contactController.index)

// Action to create a new contact in the database
router.post('/companies/:companyId/contacts', contactController.create)

// Show an individual contact
router.get('/companies/:companyId/contacts/:contactId', contactController.show)

// Update a contact in the database
router.put('/companies/:companyId/contacts/:contactId', contactController.update)

// Delete a contact in the database
router.delete('/companies/:companyId/contacts/:contactId', contactController.delete)

module.exports = router