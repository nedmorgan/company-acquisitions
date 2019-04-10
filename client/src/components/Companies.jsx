import React, { Component } from 'react'
import { CompaniesContainer } from './styled_components/CompaniesStyles'
import { Redirect } from 'react-router-dom'
import Company from './Company'
import axios from 'axios'

export default class Companies extends Component {

    state = {
        company: []
    }

    componentDidMount() {
        this.getCompanyData()
    }

    getCompanyData = () => {
        axios.get('api/v1/companies').then(response => {
            console.log(response.data)
            this.setState({ company: response.data })
        })
    }

    render() {
        return (
            <CompaniesContainer>
                <h1>Test</h1>
            </CompaniesContainer>
        )
    }
}
