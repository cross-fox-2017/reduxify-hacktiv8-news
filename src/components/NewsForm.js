import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {searchNews} from '../actions/index.js'
const NewsForm= (props) => {
  return (
    <form>
      <input type='text'  onChange={(event)=> props.searchNews(event.target.value)} value={props.searchKey}/>
    </form>
  )
}

const mapStateToProp = (state) => {
  return {
    searchKey : state.searchKey
  }
}

const mapDispatchToProp = (dispatch) => {
  return bindActionCreators({searchNews},dispatch)
}

export default connect(mapStateToProp,mapDispatchToProp)(NewsForm)
