import React, { Component } from 'react';
import logo from './logo.svg'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
// import News from './Routes/News'
import People from './Routes/People'

class App extends Component {
  render(){
    return (
      <Router>
        <div className='App'>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Syanmil React</h2>
          </div>
          <ul>
            <li><Link to="/">News</Link></li>
            <li><Link to="/people">People</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" />
          <Route path="/people" component={People}/>
        </div>
      </Router>
    )
  }
}


export default App
