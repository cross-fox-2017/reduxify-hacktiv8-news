import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { handleChange, showSomething } from '../actions'

export const Search = (props) => {
  console.log(props);
  return (
    <div>
      <form>
        <input onChange={ e => props.handleChange(e.target.value)} type='text' value={props.cari} />
      </form>
      {props.cari !== '' ? <h6>Search result: {props.cari}</h6> : <h6>Show all results:</h6>}
      <button onClick={props.showSomething}>{props.baru}</button>
    </div>


  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({handleChange, showSomething}, dispatch)
}


const mapStateToProps = (state) => {
  return {
    baru : state.baru,
    cari : state.cari
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
