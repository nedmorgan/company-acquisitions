import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { CompanyContainer } from './styled_components/CompanyStyles'
import axios from 'axios'
import Contact from './Contact'

export default class Company extends Component {
    state = {
        company: {},
        contacts: [],
        displayCompanyEditForm: false,
        displayContactEditForm: false,
        redirectToCompanies: false,
    }

    componentDidMount() {
        this.getCompanyData()
    }

    getCompanyData = () => {
        axios.get(`/api/v1/companies/${this.props.match.params.companyId}`).then(response => {
            console.log(response.data['contacts'])
            this.setState({ company: response.data, contacts: response.data['contacts'] })
        })
    }

    toggleCompanyEditForm = (e) => {
        e.preventDefault()
        this.setState((state, props) => {
            return ({ displayCompanyEditForm: !state.displayCompanyEditForm })
        })
    }

    toggleContactEditForm = () => {
        this.setState((state, props) => {
            return ({ displayContactEditForm: !state.displayContactEditForm })
        })
    }

    handleChange = (e) => {
        const company = { ...this.state.company }
        company[e.target.name] = e.target.value
        this.setState({ company })
    }

    removeContact = (e, id) => {
        e.preventDefault()
        const companyId = this.props.match.params.companyId
        axios.delete(`/api/v1/companies/${companyId}/contacts/${id}`)
            .then(res => {
                this.getCompanyData()
            })
    }

    removeCompany = () => {
        const companyId = this.props.match.params.companyId
        axios.delete(`/api/v1/companies/${companyId}`)
            .then(res => {
                this.setState({ company: res.data, redirectToCompanies: true })
            })
    }

    render() {
        if (this.state.redirectToCompanies) {
            return (<Redirect to={`/companies`} />)
        }
        return (
            <CompanyContainer>
                {
                    this.state.displayCompanyEditForm ?
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
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="financialPerformance"
                                    onChange={this.handleChange}
                                    value={this.state.company.financialPerformance}></textarea>
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
                            <h1>{this.state.company.name}<a onClick={this.toggleCompanyEditForm}><i class="fas fa-edit"></i></a></h1>
                            <h3><u><b>Status:</b></u> {this.state.company.status}</h3>
                            <p><u><b>Financial Situation:</b></u> {this.state.company.financialPerformance}</p>
                            <p><u><b>Company Profile:</b></u> {this.state.company.information}</p>
                            <Contact
                                contacts={this.state.contacts}
                                company={this.state.company}
                                displayContactEditForm={this.state.displayContactEditForm}
                                toggleContactEditForm={this.toggleContactEditForm}
                                removeContact={this.removeContact} />
                        </div>
                }
                <button type="button" class="btn btn-danger" onClick={this.removeCompany}>Remove Company</button>
            </CompanyContainer >
        )
    }
}
