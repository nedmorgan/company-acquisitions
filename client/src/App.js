import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Companies from './components/Companies'
import Company from './components/Company'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/companies' component={Companies} />
            <Route exact path='/companies/:companyId' component={Company} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
