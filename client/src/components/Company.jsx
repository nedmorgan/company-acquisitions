import React, { Component } from 'react'
import { CompanyContainer } from './styled_components/CompanyStyles'
import axios from 'axios'
import Contact from './Contact'

export default class Company extends Component {
    state = {
        company: {},
        contacts: []
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

    render() {
        return (
            <CompanyContainer>
                <h1><a href={`companies/${this.state.company._id}`}>{this.state.company.name}</a></h1>
                <h3><u><b>Status:</b></u> {this.state.company.status}</h3>
                <p><u><b>Financial Situation:</b></u> {this.state.company.financialPerformance}</p>
                <p><u><b>Company Profile:</b></u> {this.state.company.information}</p>
                <Contact
                    contacts={this.state.contacts}
                    company={this.state.company} />
            </CompanyContainer >
        )
    }
}
