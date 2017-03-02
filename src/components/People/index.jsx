import React from 'react'
import PeopleList from './PeopleList'
import FormSearchPeople from './FormSearchPeople'

const People = () => (
  <div className="People-body">
    <FormSearchPeople />
    <PeopleList />
  </div>
)

export default People
