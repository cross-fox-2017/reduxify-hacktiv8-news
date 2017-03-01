import React, { Component } from 'react';
import '../../App.css';
import Search from './Search';
import NewsList from './NewsList';

class News extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: 'react'
    }
    this.handleForm = this.handleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleForm(event){
    event.preventDefault()
  }
  handleChange(event){
    this.setState({
      search: event.target.value
    })
  }
  cekSearch(item){
    let cut = new RegExp(`${this.state.search}`, 'i')
    return cut.test(item)
  }
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
