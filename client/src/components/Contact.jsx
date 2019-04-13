import React, { Component } from 'react'
import { ContactContainer } from './styled_components/ContactStyles'
import ContactForm from './ContactForm'

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
                        <ContactForm
                            updateContact={this.props.updateContact}
                            createContact={this.props.createContact}
                            isUpdate={this.state.isUpdate}
                            contact={this.state.contact}
                            toggleEditForm={this.props.toggleEditForm}
                            handleChange={this.handleChange} />
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
