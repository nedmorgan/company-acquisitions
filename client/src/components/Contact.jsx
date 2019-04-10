import React, { Component } from 'react'
import axios from 'axios'

export default class Contact extends Component {

    state = {
        isLoading: true,
    }

    render() {
        return (
            <div>
                {
                    this.props.contacts.map((contact, i) => {
                        return (
                            <ul key={i}>
                                <li>{contact.contact}</li>
                                <li>{contact.title}</li>
                                <li>{contact.phoneNumber}</li>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}
