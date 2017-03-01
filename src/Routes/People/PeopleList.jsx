import React from 'react'

export const PeopleList = (props) => {
  return (
    <ul>
      {this.props.list.map((item, index)=>{
        return (
            <li key={index}>
              {item.name}
            </li>
          )
        })
      }
    </ul>
  )
}
