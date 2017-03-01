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
      onChange={event => props.actionSearchNews(event.target.value)}
      value={props.searchTitle}
      type="text"
    /><br/>
    </form>
  </div>
)

const mapStateToProps = state => {
  return {
    searchTitle: state.searchNews
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({actionSearchNews},dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FormSearchNews)
