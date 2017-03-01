import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NewsList extends Component {
  renderList() {
    return this.props.news.map((berita,index) => {
      return <li key={index}><a href={berita.url}>{berita.title}</a></li>
    })
  }
  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.filter(berita => berita.title.toLowerCase().match(state.searchNews.toLowerCase()))
  }
}

export default connect(mapStateToProps)(NewsList)
