import React, { Component } from 'react'
import axios from 'axios'

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
            <div>
                {
                    this.props.displayContactAddForm ?
                        <form onSubmit={(e) => this.props.createContact(e, this.state.contact)}>
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
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="e-mail address"
                                    name="email"
                                    onChange={this.handleChange}
                                    value={this.state.contact.email}></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        :
                        <div>
                            <h2>Company Contact Information <a onClick={(e) => this.props.toggleContactAddForm(e)}><i class="fas fa-plus"></i></a></h2>
                            {
                                this.props.contacts.map((contact, i) => {
                                    return (
                                        <div>
                                            <h3>{contact.contact}'s Information</h3>
                                            <ul key={i}>
                                                <li>{contact.title}</li>
                                                <li>{contact.phoneNumber}</li>
                                                <li>{contact.email}</li>
                                            </ul>
                                            <a onClick={(e) => this.props.removeContact(e, contact._id)}><i class="fas fa-trash-alt"></i></a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
            </div>
        )
    }
}
