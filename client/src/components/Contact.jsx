import React, { Component } from 'react'
import axios from 'axios'
import { ContactContainer } from './styled_components/ContactStyles'

export default class Contact extends Component {

    state = {
        isLoading: true,
        contact: {
            contact: '',
            title: '',
            phoneNumber: '',
            email: '',
        },
        contactInfo: []
    }

    componentDidMount() {
        this.setState({ contactInfo: this.props.contacts })
    }

    handleChange = (e) => {
        const contact = { ...this.state.contact }
        contact[e.target.name] = e.target.value
        this.setState({ contact })
    }

    render() {
        return (
            <ContactContainer>
                {
                    this.props.displayContactAddForm ?
                        <div className="form-container">
                            <form
                                className="new-contact-form"
                                onSubmit={
                                    this.props.isUpdate
                                        ? (e) => this.props.updateContact(e, this.state.contact)
                                        : (e) => this.props.createContact(e, this.state.contact)
                                }
                            >
                                <a onClick={(e) => this.props.toggleContactAddForm(e)}><i class="back-icon fas fa-arrow-left"></i></a>
                                <div class="form-group">
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        name="contact"
                                        onChange={this.handleChange}
                                        value={this.state.contact.contact}
                                        placeholder="Full Name"></input>
                                </div>
                                <div class="form-group">
                                    <label>Title:</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Job Title"
                                        name="title"
                                        onChange={this.handleChange}
                                        value={this.state.contact.title}></input>
                                </div>
                                <div class="form-group">
                                    <label>Phone Number:</label>
                                    <input
                                        type="tel"
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Phone Number"
                                        name="phoneNumber"
                                        onChange={this.handleChange}
                                        value={this.state.contact.phoneNumber}></input>
                                </div>
                                <div class="form-group">
                                    <label>E-mail:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="e-mail address"
                                        name="email"
                                        onChange={this.handleChange}
                                        value={this.state.contact.email}></input>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        :
                        <div>
                            <h2>Company Contact Information <a onClick={(e) => this.props.toggleContactAddForm(e)}><i class="fas fa-plus"></i></a></h2>
                            <div className="contact-container">
                                {
                                    this.props.contacts.map((contact, i) => {
                                        return (
                                            <div className="contact-flex">
                                                <div className="title-flex">
                                                    <h3><a onClick={(e) => this.props.toggleContactEditForm(e)}><i class="edit-icon far fa-edit"></i></a>{contact.contact}'s Information</h3>
                                                </div>
                                                <ul key={i}>
                                                    <li className="contact-title"><b>{contact.title}</b></li>
                                                    <li><i className="list-icon fas fa-phone-square"></i>{contact.phoneNumber}</li>
                                                    <li><i className="list-icon fas fa-envelope-square"></i>{contact.email}</li>
                                                </ul>
                                                <div className="trash-icon-container">
                                                    <a onClick={(e) => this.props.removeContact(e, contact._id)}><i className="trash-icon fas fa-trash-alt"></i></a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                }
            </ContactContainer>
        )
    }
}
