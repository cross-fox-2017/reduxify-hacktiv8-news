import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchNews } from '../../actions'

const Search = (props) => {
  return (
    <div className='search-news'>
      <form>
        <input type='text' onChange={e => props.searchNews(e.target.value)} />
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({searchNews}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)
