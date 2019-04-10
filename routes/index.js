const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController')

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

module.exports = router