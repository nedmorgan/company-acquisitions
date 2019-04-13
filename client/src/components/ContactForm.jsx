import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div className="form-container">
                <form
                    className="new-contact-form"
                    onSubmit={
                        this.props.isUpdate
                            ? (e) => this.props.updateContact(e, this.props.contact, this.props.contact._id)
                            : (e) => this.props.createContact(e, this.props.contact)
                    }
                >
                    <a onClick={(e) => this.props.toggleEditForm(e)}><i className="back-icon fas fa-arrow-left"></i></a>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            name="contact"
                            onChange={this.props.handleChange}
                            value={this.props.contact.contact}
                            placeholder="Full Name"></input>
                    </div>
                    <div className="form-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Job Title"
                            name="title"
                            onChange={this.props.childrenhandleChange}
                            value={this.props.contact.title}></input>
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            onChange={this.props.handleChange}
                            value={this.props.contact.phoneNumber}></input>
                    </div>
                    <div className="form-group">
                        <label>E-mail:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="e-mail address"
                            name="email"
                            onChange={this.props.handleChange}
                            value={this.props.contact.email}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
