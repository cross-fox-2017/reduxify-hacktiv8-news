import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const styles = {
  width: '30%',
  padding: '0px 10px'
}

import { searchNews } from '../../actions'
// handleChange={this.handleChange.bind(this)}

const DataSearch = (props) => {
  return (
    <form>
      <label>
        Search:
      </label>
      <input
        style={styles}
        value={props.searchKey}
        type='text'
        onChange={props.handleChange} />
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    searchKey: state.searchKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({searchNews}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DataSearch)
