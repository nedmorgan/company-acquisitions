import React, { Component } from 'react'
import { CompanyContainer } from './styled_components/CompanyStyles'
import axios from 'axios'
import Contact from './Contact'

export default class Company extends Component {
    state = {
        company: {},
        contacts: [],
        toggleCompanyEditForm: false,
        toggleContactEditForm: false,
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

    toggleCompanyEditForm = () => {
        this.setState((state, props) => {
            return ({ toggleCompanyEditForm: !state.toggleCompanyEditForm })
        })
    }

    render() {
        return (
            <CompanyContainer>
                {
                    this.state.toggleCompanyEditForm ?
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
                                toggleContactEditForm={this.state.toggleContactEditForm} />
                        </div>
                }
            </CompanyContainer >
        )
    }
}
