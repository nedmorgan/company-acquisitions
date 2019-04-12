import React, { Component } from 'react'
import { CompaniesContainer } from './styled_components/CompaniesStyles'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

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

    getCompaniesData = () => {
        axios.get('/api/v1/companies').then(response => {
            this.setState({ companies: response.data })
        })
    }

    createCompany = () => {
        let payload = this.state.company
        axios.post('/api/v1/companies', payload).then((res) => {
            this.setState({ redirectToCompanyPage: true, createdCompany: res.data })
        })
    }

    handleChange = (e) => {
        const company = { ...this.state.company }
        company[e.target.name] = e.target.value
        this.setState({ company })
    }

    handleNewCompany = (e) => {
        e.preventDefault()
        this.createCompany()
    }

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
                        <div className="form-container">
                            <form className="new-company-form" onSubmit={this.handleNewCompany}>
                                <a onClick={this.toggleCompanyForm}><i className="back-icon fas fa-arrow-left"></i></a>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        name="name"
                                        onChange={this.handleChange}
                                        value={this.state.company.name}
                                        placeholder="Company Name"></input>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Status:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Company Status"
                                        name="status"
                                        onChange={this.handleChange}
                                        value={this.state.company.status}></input>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Financial Performance:</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        name="financialPerformance"
                                        onChange={this.handleChange}
                                        value={this.state.company.financialPerformance}></textarea>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Information:</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        name="information"
                                        onChange={this.handleChange}
                                        value={this.state.company.information}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
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
