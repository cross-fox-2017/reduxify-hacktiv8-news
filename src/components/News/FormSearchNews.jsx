import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionSearchNews } from '../../actions'

const FormSearchNews = (props) => (
  <div>
    <form>
      <br/>
      Search News:<br/>
    <input
      onChange={event => props.actionSearchNews(event.target.value, props.news)}
      type="text"
    /><br/>
    </form>
  </div>
)

const mapStateToProps = state => {
  return {
    searchTitle: state.searchNews,
    news: state.news
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({actionSearchNews},dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FormSearchNews)
