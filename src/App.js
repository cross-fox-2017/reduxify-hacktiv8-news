import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NewsList, PeoplesList, Search} from './components/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hacktiv8 Hacker News Redux</h2>
        </div>
        <h3 className="App-intro">
          News List
        </h3>
        <Search />
        <NewsList />
        <h3>Peoples</h3>
        <PeoplesList />
      </div>
    );
  }
}

export default App;
