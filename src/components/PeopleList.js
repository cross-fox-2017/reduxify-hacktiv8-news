import React from 'react'
import {PeopleCount} from './PeopleCount.js'
import {connect} from 'react-redux'

export const PeopleList = (props) => {
  return (
    <ul>
      {
        props.peoples.map((item,index)=>{
          return(
            <PeopleCount key={index} {...item}/>
          )
        })
       }
    </ul>
  )
}

const toProp = (state) => {
  return {
    peoples : state.peoples
  }
}

export default connect(toProp)(PeopleList)
