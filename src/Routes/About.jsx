import React, { Component } from 'react'
import { connect } from 'react-redux'

class About extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     peoples: []
  //   }
  // }
  //
  // componentDidMount () {
  //   this.fetchPeoples()
  // }
  //
  // fetchPeoples () {
  //   fetch('https://swapi.co/api/people/')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((resp) => {
  //       this.setState({
  //         peoples: resp.results
  //       })
  //     })
  // }

  render () {
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
  }
}

const mapStateToProps = (state) => {
  return {
    peoples: state.peoples
  }
}

export default connect(mapStateToProps)(About)
