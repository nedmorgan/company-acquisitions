import React, { Component } from 'react'
import { NavContainer } from './styled_components/NavBarStyles'

export default class NavBar extends Component {
    render() {
        return (
            <NavContainer>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/companies">Companies</a>
                    </li>
                </ul>
            </NavContainer>
        )
    }
}
