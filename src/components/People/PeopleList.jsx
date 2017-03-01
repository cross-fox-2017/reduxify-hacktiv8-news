import React, { Component } from 'react'
import { connect } from 'react-redux'

class PeopleList extends Component {
  renderList() {
    return this.props.people.map((orang,index) => {
      return <li key={index}>{orang.name}</li>
    })
  }
  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps)(PeopleList)
