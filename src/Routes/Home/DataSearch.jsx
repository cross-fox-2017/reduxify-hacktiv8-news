import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const styles = {
  width: '30%',
  padding: '0px 10px'
}

import { setSearchKey, resetSearchKey } from '../../actions'

const DataSearch = (props) => {
  return (
    <div>
      <form>
        <label>
          Search:
        </label>
        <input
          style={styles}
          type='text'
          value={props.searchKey}
          onChange={event => props.setSearchKey(event.target.value)} />
      </form>
      {props.searchKey !== '' ? <h6>Search Result for: {props.searchKey}</h6> : <h6>Showing All Results</h6>}
      {props.searchKey !== '' ? <button className='btn' onClick={props.resetSearchKey}>
                                  Reset Search
                                </button> : true}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    searchKey: state.searchKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setSearchKey, resetSearchKey}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DataSearch)
