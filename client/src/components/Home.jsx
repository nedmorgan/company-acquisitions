import React, { Component } from 'react'
import { HomeContainer } from './styled_components/HomeStyles'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <div className="container">
                    <h1>Business Acquisition Portal</h1>
                    <Link to="/companies" className="button">Companies</Link>
                </div>
            </HomeContainer>
        )
    }
}
