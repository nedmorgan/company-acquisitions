import React, { Component } from 'react'
import { CompaniesContainer } from './styled_components/CompaniesStyles'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import CompaniesAddForm from './CompaniesAddForm'

export default class Companies extends Component {

    state = {
        companies: [],
        company: {
            name: '',
            status: '',
            information: '',
            financialPerformance: '',
            contacts: []
        },
        redirectToCompanyPage: false,
        displayCompanyForm: false,
        createdCompany: {}
    }

    componentDidMount() {
        this.getCompaniesData()
    }

    // Function ot obtain company data
    getCompaniesData = () => {
        axios.get('/api/v1/companies').then(response => {
            this.setState({ companies: response.data })
        })
    }

    // Function to create a new company in the database
    createCompany = () => {
        if (this.checkValue()) {
            return
        }
        if (this.checkCompany()) {
            return
        }
        let payload = this.state.company
        axios.post('/api/v1/companies', payload).then((res) => {
            this.setState({ redirectToCompanyPage: true, createdCompany: res.data })
        })
    }

    checkCompany = () => {
        let name = this.state.company.name.toLowerCase()
        let filteredCompany = this.state.companies.filter(company => name == company.name.toLowerCase())
        if (filteredCompany.length > 0) {
            alert("Company already exists")
            return true
        }
    }

    checkValue = () => {
        let nameValue = this.state.company.name
        if (nameValue === '') {
            alert('Please enter name value for company')
            return true
        }
    }

    // Function to handle the input change in state
    handleChange = (e) => {
        const company = { ...this.state.company }
        company[e.target.name] = e.target.value
        this.setState({ company })
    }

    // Function to prevent default action and create a new company in the database
    handleNewCompany = (e) => {
        e.preventDefault()
        this.createCompany()
    }

    // Function to toggle the company form
    toggleCompanyForm = () => {
        this.setState((state, props) => {
            return ({ displayCompanyForm: !state.displayCompanyForm })
        })
    }

    render() {
        if (this.state.redirectToCompanyPage) {
            return (<Redirect to={`/companies/${this.state.createdCompany._id}`} />)
        }
        return (
            <CompaniesContainer>
                <h1>Companies<a onClick={this.toggleCompanyForm}><i className="add-link fas fa-plus"></i></a></h1>
                {
                    this.state.displayCompanyForm ?
                        <CompaniesAddForm
                            handleNewCompany={this.handleNewCompany}
                            toggleCompanyForm={this.toggleCompanyForm}
                            handleChange={this.handleChange}
                            company={this.state.company} />
                        :
                        <div className="company-flex">
                            {
                                this.state.companies.map(company => {
                                    return (
                                        <div className="card text-center">
                                            <div className="card-body">
                                                <h5 className="card-title">{company.name}</h5>
                                                <a href={`companies/${company._id}`} className="visit-button btn btn-primary">Visit Company</a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                }

            </CompaniesContainer>
        )
    }
}
