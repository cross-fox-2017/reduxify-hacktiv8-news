import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { typeSearch } from '../../Actions'

const Search = (props) => {
  return (
    <form >
      <label>Search : </label>
      <input type="text" onChange={(event)=>props.typeSearch(event.target.value)}></input>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({typeSearch}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)
