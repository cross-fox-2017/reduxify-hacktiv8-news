import React, { Component } from 'react';
import '../../App.css';
import PeopleBox from './PeopleBox'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchData } from '../../Actions'

class People extends Component {
  fetchPeople(){
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then((json) => {
        this.props.fetchData(json.results)
      })
  }
  componentWillMount(){
    this.fetchPeople()
  }
  render(){
    return (
      <div>
        <PeopleBox />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchData}, dispatch)
}

export default connect(null, mapDispatchToProps)(People)
