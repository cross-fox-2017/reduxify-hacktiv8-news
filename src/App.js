import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Menu, Header } from './components'
import Routes from './routes'

const App = () => (
  <div className='App'>
    <Header />
    <Router>
      <div>
        <Menu />
        <Routes />
      </div>
    </Router>
  </div>
)

export default App
