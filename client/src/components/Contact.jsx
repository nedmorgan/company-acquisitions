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
        contactInfo: [],
        isUpdate: false,
    }

    componentDidMount() {
        this.setState({ contactInfo: this.props.contacts })
    }

    // Function to handle the input change from the contact form into state
    handleChange = (e) => {
        const contact = { ...this.state.contact }
        contact[e.target.name] = e.target.value
        this.setState({ contact })
    }

    // Function to show the contact edit form and set state to toggle the submit action of the form
    toggleContactEditForm = (e, contact) => {
        e.preventDefault()
        this.setState((state, props) => {
            return {
                isUpdate: true,
                contact: contact
            }
        })
        this.props.toggleEditForm(e)
    }
    // Function to show the add contact form and set state to toggle the submit action of the form
    toggleAddForm = (e) => {
        e.preventDefault()
        this.setState((state, props) => {
            return {
                isUpdate: false,
                contact: {}
            }
        })
        this.props.toggleEditForm(e)
    }

    render() {
        return (
            <ContactContainer>
                {
                    this.props.isEditFormDisplayed ?
                        <div className="form-container">
                            <form
                                className="new-contact-form"
                                onSubmit={
                                    this.state.isUpdate
                                        ? (e) => this.props.updateContact(e, this.state.contact, this.state.contact._id)
                                        : (e) => this.props.createContact(e, this.state.contact)
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
                                        onChange={this.handleChange}
                                        value={this.state.contact.contact}
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
                                        onChange={this.handleChange}
                                        value={this.state.contact.title}></input>
                                </div>
                                <div className="form-group">
                                    <label>Phone Number:</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Phone Number"
                                        name="phoneNumber"
                                        onChange={this.handleChange}
                                        value={this.state.contact.phoneNumber}></input>
                                </div>
                                <div className="form-group">
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
                        <div className="contact">
                            <h2>Company Contact Information <a onClick={(e) => this.toggleAddForm(e)}><i className="fas fa-plus"></i></a></h2>
                            <div className="contact-container">
                                {
                                    this.props.contacts.map((contact, i) => {
                                        return (
                                            <div className="contact-flex">
                                                <div className="title-flex">
                                                    <h3><a onClick={(e) => this.toggleContactEditForm(e, contact)}><i className="edit-icon far fa-edit"></i></a>{contact.contact}'s Information</h3>
                                                </div>
                                                <ul key={i}>
                                                    <li className="contact-title"><b>{contact.title}</b></li>
                                                    <li><a href={`tel:${contact.phoneNumber}`} rel="noreferrer"><i className="list-icon fas fa-phone-square"></i></a>{contact.phoneNumber}</li>
                                                    <li><a href={`mailto:${contact.email}`} rel="noreferrer"><i className="list-icon fas fa-envelope-square"></i></a>{contact.email}</li>
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
