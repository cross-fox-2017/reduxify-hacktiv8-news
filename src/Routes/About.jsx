import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setPeoples } from '../actions'

class About extends Component {
  componentDidMount () {
    this.fetchPeoples()
  }

  fetchPeoples () {
    fetch('https://swapi.co/api/people')
      .then((response) => {
        return response.json()
      })
      .then((resp) => {
        this.props.setPeoples(resp.results)
      })
  }

  render () {
    if (this.props.peoples !== '') {
      return (
        <div>
          <h5>Peoples</h5>
          <ul>
            {this.props.peoples.map((people, index) => {
               return (
                 <li key={index}>
                   {people.name}
                 </li>
               )
             })}
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <h5>Peoples</h5>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    peoples: state.peoples
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setPeoples}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
