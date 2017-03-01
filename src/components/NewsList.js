import React from 'react'
import {NewsItem} from './NewsItem.js'
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'

const NewsList = (props) => {
  return (
    <ul>
      {
        props.news.map((item,index)=>{
          return(
            <NewsItem key={index} {...item}/>
          )
        })
      }
    </ul>
  )
}

const toProp = (state) => {
  return {
    news : state.news.filter((x)=>{return x.title.match(new RegExp(state.searchKey,'i'))})

  }
}

export default connect(toProp)(NewsList)
