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
        displayContactAddForm: false,
        isEditFormDisplayed: false,
        redirectToCompanies: false,
    }

    componentDidMount() {
        this.getCompanyData()
    }

    getCompanyData = () => {
        axios.get(`/api/v1/companies/${this.props.match.params.companyId}`).then(response => {
            this.setState({ company: response.data, contacts: response.data['contacts'] })
        })
    }

    updateCompany = (e) => {
        let payload = this.state.company
        e.preventDefault()
        axios.put(`/api/v1/companies/${this.state.company._id}`, payload)
            .then(res => {
                this.setState({ company: res.data, displayCompanyEditForm: false })
            })
    }

    removeCompany = () => {
        const companyId = this.props.match.params.companyId
        axios.delete(`/api/v1/companies/${companyId}`)
            .then(res => {
                this.setState({ company: res.data, redirectToCompanies: true })
            })
    }

    toggleCompanyEditForm = (e) => {
        e.preventDefault()
        this.setState((state, props) => {
            return ({ displayCompanyEditForm: !state.displayCompanyEditForm })
        })
    }

    toggleEditForm = (e) => {
        e.preventDefault()
        this.setState((state, props) => {
            return ({ isEditFormDisplayed: !state.isEditFormDisplayed })
        })
    }

    handleChange = (e) => {
        const company = { ...this.state.company }
        company[e.target.name] = e.target.value
        this.setState({ company })
    }

    updateContact = (e, payload, id) => {
        let companyId = this.props.match.params.companyId
        e.preventDefault()
        axios.put(`/api/v1/companies/${companyId}/contacts/${id}`, payload)
            .then(res => {
                this.setState({ company: res.data, contacts: res.data['contacts'], isEditFormDisplayed: false })
            })
    }

    createContact = (e, payload) => {
        e.preventDefault()
        const companyId = this.props.match.params.companyId
        axios.post(`/api/v1/companies/${companyId}/contacts`, payload).then((res) => {
            this.setState({ isEditFormDisplayed: false })
            this.getCompanyData()
        })
    }

    removeContact = (e, id) => {
        e.preventDefault()
        const companyId = this.props.match.params.companyId
        axios.delete(`/api/v1/companies/${companyId}/contacts/${id}`)
            .then(res => {
                this.getCompanyData()
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
                        <div className="form-container">
                            <form className="edit-company-form" onSubmit={this.updateCompany}>
                                <a onClick={this.toggleCompanyEditForm}><i className="back-icon fas fa-arrow-left"></i></a>
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
                        <div className="company-info">
                            <h1>{this.state.company.name}<a onClick={this.toggleCompanyEditForm}><i className="edit-company-icon fas fa-edit"></i></a></h1>
                            <h3><u><b>Status:</b></u> {this.state.company.status}</h3>
                            <p><u><b>Financial Situation:</b></u> {this.state.company.financialPerformance}</p>
                            <p><u><b>Company Profile:</b></u> {this.state.company.information}</p>
                            <Contact
                                contacts={this.state.contacts}
                                company={this.state.company}
                                removeContact={this.removeContact}
                                createContact={this.createContact}
                                isUpdate={this.state.isUpdate}
                                isEditFormDisplayed={this.state.isEditFormDisplayed}
                                updateContact={this.updateContact}
                                toggleEditForm={this.toggleEditForm}
                            />
                        </div>
                }
                <div className="remove-container">
                    <button type="button" className="remove-company btn btn-danger" onClick={this.removeCompany}>Remove Company</button>
                </div>
            </CompanyContainer >
        )
    }
}
