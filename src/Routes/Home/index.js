import React from 'react'

import DataList from './DataList.jsx'
import DataSearch from './DataSearch.jsx'

const style = {
  margin: '30px 150px'
}

const Home = () => {
  return (
    <div className='News-list' style={style}>
      <DataSearch />
      <DataList />
    </div>
  )
}

export default Home
