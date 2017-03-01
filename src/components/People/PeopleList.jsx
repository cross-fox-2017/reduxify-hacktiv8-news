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
    people: state.people.filter(
      orang => orang.name.toLowerCase()
      .match(state.searchPeople.toLowerCase())
    )
  }
}

export default connect(mapStateToProps)(PeopleList)
