import React from 'react';
import './App.css';
import {News,People} from './components';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Routers = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">News</Link></li>
        <li><Link to="/peoples">peoples</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={News}/>
      <Route exact path="/peoples" component={People}/>
    </div>
  </Router>
)





export default Routers;
