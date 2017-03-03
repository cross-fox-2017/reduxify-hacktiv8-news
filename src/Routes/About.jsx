import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPeoples } from '../actions'
import loadingImage from './Home/loading1.gif'

class About extends Component {
  componentDidMount () {
    this.props.fetchPeoples()
  }

  render () {
    return (
      <div>
        {this.props.peoples === '' ? <img src={loadingImage} role='presentation'/> : (
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
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    peoples: state.peoples
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchPeoples}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
