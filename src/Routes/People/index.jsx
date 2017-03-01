import React, { Component } from 'react';
import '../../App.css';
import PeopleBox from './PeopleBox'

class People extends Component {
  // componentWillMount(){
  //   this.fetchPeople()
  // }
  // fetchPeople(){
  //   fetch('https://swapi.co/api/people')
  //     .then((res)=> res.json())
  //     .then((items)=>{
  //       this.setState({
  //         people : items.results
  //       })
  //     })
  //     .catch((err)=> console.log(err))
  // }
  render(){
    return (
      <div>
        <PeopleBox />
      </div>
    )
  }
}

export default People;
