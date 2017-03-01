import React, { Component } from 'react';
import '../../App.css';
import Search from './Search';
import NewsList from './NewsList';

class News extends Component {
  render() {
    return (
      <div className="App">
        <br></br>
        <Search />
        <NewsList />
      </div>
    )
  }
}

export default News;
