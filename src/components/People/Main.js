import React, { Component } from 'react'
import '../../App.css'
import { connect } from 'react-redux'

import { Header } from '../Header/Header'

class People extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <h1>Hacktiv8 Peoples</h1>
        <ul className='center'>
          {this.props.people
             .map((item, index) => {
               return (
                 <p key={index}>
                   <a href={item.url}>
                     {item.name}
                   </a>
                 </p>
               )
             })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps)(People)
