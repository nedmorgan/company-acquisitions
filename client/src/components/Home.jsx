import React, { Component } from 'react'
import { HomeContainer } from './styled_components/HomeStyles'

export default class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <div className="container">
                    <h1>Business Acquisition Information</h1>
                    <button type="button" href="/companies/" className="btn btn-light">Companies</button>
                </div>
            </HomeContainer>
        )
    }
}
