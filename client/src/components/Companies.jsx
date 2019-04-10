import React, { Component } from 'react'
import { CompaniesContainer } from './styled_components/CompaniesStyles'
import { Redirect } from 'react-router-dom'
import Company from './Company'
import axios from 'axios'

export default class Companies extends Component {

    state = {
        companies: []
    }

    componentDidMount() {
        this.getCompanyData()
    }

    getCompanyData = () => {
        axios.get('api/v1/companies').then(response => {
            this.setState({ companies: response.data })
        })
    }

    render() {
        return (
            <CompaniesContainer>
                <Company
                    companies={this.state.companies} />
            </CompaniesContainer>
        )
    }
}
