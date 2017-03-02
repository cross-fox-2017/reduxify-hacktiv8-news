import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionSearchPeople } from '../../actions'

const FormSearchPeople = (props) => (
  <div>
    <form>
      <br/>
      Search People:<br/>
    <input
      onChange={event => props.actionSearchPeople(event.target.value)}
      value={props.searchName}
      type="text"
    /><br/>
    </form>
  </div>
)

const mapStateToProps = state => {
  return {
    searchName: state.searchPeople
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({actionSearchPeople},dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FormSearchPeople)
