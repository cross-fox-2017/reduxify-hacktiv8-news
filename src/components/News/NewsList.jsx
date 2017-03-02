import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    news: state.searchNews
  }
}

export default connect(mapStateToProps)(NewsList)
