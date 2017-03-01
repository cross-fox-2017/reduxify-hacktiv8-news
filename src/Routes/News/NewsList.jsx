import React from 'react'
import { connect } from 'react-redux'

const NewsList = (props) => {
  return (
    <ul>
      {props.news.map((item)=>{
        return (
            <li key={`${item.objectID}`}>
              <a href={item.url} target="_blank">{item.title}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}

export default connect(mapStateToProps)(NewsList)
