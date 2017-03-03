import React from 'react'
import { connect } from 'react-redux'
import { searchNews } from '../actions'
import { bindActionCreators } from 'redux'

const SearchForm = (props) => {
  return (
    <form>
      <input type='text' onChange={(e) => props.searchNews(e.target.value, props.news)} placeholder="Search via list on 'react' or 'redux' " />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    news: state.news
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({searchNews}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
