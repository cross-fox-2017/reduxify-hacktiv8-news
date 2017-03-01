import React, { Component } from 'react';
import '../../App.css';
import {Search} from './Search';
import {NewsList} from './NewsList';

class News extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          title: 'React',
          url: 'https://facebook.github.io/react/',
          author: 'Jordan Walke',
          id: 0
        },
        {
          title: 'Redux',
          url: 'https://github.com/reactjs/redux',
          author: 'Dan Abramov, Andrew Clark',
          id: 1
        }
      ],
      search: 'react'
    }
    this.handleForm = this.handleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleForm(event){
    event.preventDefault()
    // this.letFetch()
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
  // componentDidMount(){
  //   this.letFetch()
  // }
  // letFetch(){
  //   const that = this
  //   let uri = encodeURI(this.state.search)
  //   fetch(`https://hn.algolia.com/api/v1/search?query=${uri}`)
  //     .then(function(response) {
  //       return response.json()
  //     })
  //     .then(function(data){
  //       that.setState({
  //         data : data.hits
  //       })
  //     })
  //     .catch(function(err){
  //       throw err
  //     })
  // }
  render() {
    return (
      <div className="App">
        <br></br>
        <Search handleChange={this.handleChange} handleForm={this.handleForm}/>
        <NewsList list={this.state.data.filter(item => this.cekSearch(item.title))} />
      </div>
    )
  }
}

export default News;
