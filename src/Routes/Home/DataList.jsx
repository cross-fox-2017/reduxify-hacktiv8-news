import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchNews } from '../../actions'
import loadingImage from './loading1.gif'

class DataList extends Component {
  componentDidMount () {
    this.props.fetchNews()
  }

  render () {
    return (
      <div>
        {this.props.news === '' ? <img src={loadingImage} role='presentation'/> : (
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
              })
            }
          </ul>
        )}
      </div>
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
  return bindActionCreators({fetchNews}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DataList)
