import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchData } from '../../Actions'

const Search = (props) => {
  return (
    <form >
      <label>Search : </label>
      <input type="text" onChange={(event)=>props.fetchData(event.target.value)}></input>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchData}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)
