import React from 'react'
import { connect } from 'react-redux'

// news={this.state.news.filter((eachNews) => (eachNews.title === null ? '' : eachNews.title).match(new RegExp(this.state.searchKey, 'i')))

const DataList = (props) => {
  return (
    <ul>
      {props.news.map((item, index) => {
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

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}

export default connect(mapStateToProps)(DataList)
