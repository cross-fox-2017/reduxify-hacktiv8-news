import React from 'react'
import { connect } from 'react-redux'

const About = (props) => {
  return (
    <div>
      <h5>Peoples</h5>
      <ul>
        {props.peoples.map((people, index) => {
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

const mapStateToProps = (state) => {
  return {
    peoples: state.peoples
  }
}

export default connect(mapStateToProps)(About)
