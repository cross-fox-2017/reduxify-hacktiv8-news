import React, { Component } from 'react'
import { connect } from 'react-redux'

class About extends Component {
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
