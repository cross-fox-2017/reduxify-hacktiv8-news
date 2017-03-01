import React from 'react'
import { connect } from 'react-redux'

class PeoplesList extends React.Component {
  render () {
    return (
      <span className='list-group'>
        {
          this.props.aa.map((individu, index) => {
            return (
              <p key={index}>
                {individu.name}
              </p>
            )
          })
        }
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    aa: state.orang
  }
}

export default connect(mapStateToProps)(PeoplesList)
