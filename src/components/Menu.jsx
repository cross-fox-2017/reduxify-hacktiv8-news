import React from 'react'
import { Link } from 'react-router-dom'

const style = {
  display: 'inline-block'
}

export const Menu = () => {
  return (
    <ul>
      <li style={style}>
        <Link to='/'> Home
        </Link>
      </li>
      {'  |  '}
      <li style={style}>
        <Link to='/about'> About
        </Link>
      </li>
    </ul>
  )
}
