import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Release2 } from './components/Release2.js'
import { Release5 } from './components/Release5.js'
import { SearchForm } from './components/SearchForm.js'
import { SearchApi } from './components/SearchApi.js'
import { Starwars } from './components/Starwars.js'
import { Home } from './components/Home.js'
import { People } from './components/People.js'

const App = () => (
  <Router>
    <div>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Welcome to React</h2>
      </div>
      <br/>
      <nav>
        <div className='nav-wrapper grey darken-4'>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <Link to='/'> Home
              </Link>
            </li>
            <li>
              <Link to='/people'> People
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route exact path='/' component={Home} />
      <Route path='/people' component={People} />
    </div>
  </Router>
)

const data_number1 = [1, 2, 3]
const data_number2 = [{
  title: 'React',
  url: 'https://facebook.github.io/react/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0
}, {
  title: 'Redux',
  url: 'https://github.com/reactjs/redux',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1
}]

export default App
