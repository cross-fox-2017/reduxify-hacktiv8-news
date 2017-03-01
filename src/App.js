import React from 'react'
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
import News from './components/News'
import People from './components/People'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={ logo } className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <Router>
      <div>
        <div className="Navbar">
          <ul>
            <li><Link to="/">News</Link></li>
            <li><Link to="/people">People</Link></li>
          </ul>
        </div>
        <Route exact path="/" component={ News } />
        <Route path="/people" component={ People } />
      </div>
    </Router>
  </div>
)


export default App
