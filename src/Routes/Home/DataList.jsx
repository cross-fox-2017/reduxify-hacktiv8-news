import React from 'react'
import { connect } from 'react-redux'

// news={this.state.news.)

const DataList = (props) => {
  return (
    <ul>
      {props.news
         .filter(eachNews => {
           return (eachNews.title === null ? '' : eachNews.title).match(new RegExp(props.searchKey, 'i'))
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

const mapStateToProps = (state) => {
  return {
    news: state.news,
    searchKey: state.searchKey
  }
}

export default connect(mapStateToProps)(DataList)
