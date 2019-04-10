import React, { Component } from 'react'
import { CompanyContainer } from './styled_components/CompanyStyles'

export default class Company extends Component {
    render() {
        return (
            <CompanyContainer>
                {
                    this.props.companies.map(company => {
                        return (
                            <div>
                                <h1>{company.name}</h1>
                                <h3><u><b>Status:</b></u> {company.status}</h3>
                                <p><u><b>Financial Situation:</b></u> {company.financialPerformance}</p>
                                <p><u><b>Company Profile:</b></u> {company.information}</p>
                                {
                                    company.contacts.map(contact => {
                                        return (
                                            <ul>
                                                <li className="contact-name"><u><b>Name:</b></u> {contact.contact}</li>
                                                <li><u><b>Title:</b></u> {contact.title}</li>
                                                <li><u><b>Phone Number:</b></u> {contact.phoneNumber}</li>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </CompanyContainer>
        )
    }
}
