const Company = require('../models/Company')

const companyController = {
    index: (req, res) => {
        Company.find().then((company) => {
            res.json(company)
        }).catch((err) => {
            console.log('Error finding company: ', err)
        })
    },
    create: (req, res) => {
        const newCompany = new Company(req.body.company)
        newCompany
            .save()
            .then((company) => {
                res.json(company)
            }).catch((err) => {
                console.log('Error creating a new company: ', err)
            })
    },
    show: (req, res) => {
        Company.findById(req.params.companyId).then((company) => {
            res.json(company)
        }).catch((err) => {
            console.log('Error finding specific company: ', err)
        })
    },
    update: (req, res) => {
        const company = req.params.companyId
        const updatedCompany = req.body
        Company.findByIdAndUpdate(company, updatedCompany, {
            new: true
        }).then(company => {
            res.json(company)
        }).catch((err) => {
            console.log('Error updating company: ', err)
        })
    },
    delete: (req, res) => {
        Company.findByIdAndRemove(req.params.companyId).then((company) => {
            res.json(company)
        }).catch((err) => {
            console.log('Error removing a company: ', err)
        })
    }
}

module.exports = companyController