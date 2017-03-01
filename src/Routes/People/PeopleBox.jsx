import React from 'react'
import {PeopleList} from './PeopleList'

export const PeopleBox = (props) => {
  return (
    <div>
      <h1>People</h1>
      <PeopleList list={props}/>
    </div>
  )
}
