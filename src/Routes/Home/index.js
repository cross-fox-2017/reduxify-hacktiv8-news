import React, { Component } from 'react'

import DataList from './DataList.jsx'
import DataSearch from './DataSearch.jsx'

const style = {
  margin: '30px 150px'
}

class Home extends Component {
  render () {
    return (
      <div className='News-list' style={style}>
        <DataSearch />
        <DataList />
      </div>
    )
  }
}

export default Home
