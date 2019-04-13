import React, { Component } from 'react'

export default class CompanyEditForm extends Component {
    render() {
        return (
            <div className="form-container">
                <form className="edit-company-form" onSubmit={this.props.updateCompany}>
                    <a onClick={this.props.toggleCompanyEditForm}><i className="back-icon fas fa-arrow-left"></i></a>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            name="name"
                            onChange={this.props.handleChange}
                            value={this.props.company.name}
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
                            onChange={this.props.handleChange}
                            value={this.props.company.status}></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Financial Performance:</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="4"
                            name="financialPerformance"
                            onChange={this.props.handleChange}
                            value={this.props.company.financialPerformance}></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Information:</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="4"
                            name="information"
                            onChange={this.props.handleChange}
                            value={this.props.company.information}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
