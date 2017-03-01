import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setNews } from '../../actions'

class DataList extends Component {
  componentDidMount () {
    this.fetchNews('')
  }

  fetchNews (searchQuery) {
    fetch(`https://hn.algolia.com/api/v1/search?query=${encodeURI(searchQuery)}`)
      .then((response) => {
        return response.json()
      })
      .then((resp) => {
        this.setNews(resp.hits)
      })
  }

  render () {
    return (
      <ul>
        {this.props.news
           .filter(eachNews => {
             return (eachNews.title === null ? '' : eachNews.title).match(new RegExp(this.props.searchKey, 'i'))
           })
           .map((item, index) => {
             return (
               <li key={index}>
                 <a href={item.url}>
                   {item.title}
                 </a>
               </li>
             )
           })}
      </ul>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    news: state.news,
    searchKey: state.searchKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setNews}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DataList)
