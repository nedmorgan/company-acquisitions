import React, { Component } from 'react'
import { CompaniesContainer } from './styled_components/CompaniesStyles'
import { Redirect } from 'react-router-dom'
import Company from './Company'
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
        createCompany: {}
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
        axios.post('/api/v1/companies', {
            company: this.state.company
        }).then((res) => {
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
                <h1>Companies<a onClick={this.toggleCompanyForm}><i class="fas fa-plus"></i></a></h1>
                {
                    this.state.displayCompanyForm ?
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Name:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.company.name}
                                    placeholder="Company Name"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Status:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Company Status"
                                    name="status"
                                    onChange={this.handleChange}
                                    value={this.state.company.status}></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Financial Performance:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Financial Performance"
                                    name="financialPerformance"
                                    onChange={this.handleChange}
                                    value={this.state.company.financialPerformance}></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Information:</label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="information"
                                    onChange={this.handleChange}
                                    value={this.state.company.information}></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        :
                        <div>
                            {
                                this.state.companies.map(company => {
                                    return (
                                        <div>
                                            <h1><a href={`companies/${company._id}`}>{company.name}</a></h1>
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
