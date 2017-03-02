import React from 'react'
import { connect } from 'react-redux'

class PeopleBox extends React.Component {
  render(){
    return (
      <div>
        <h1>People</h1>
          <ul>
            {this.props.people.map((item, index)=>{
              return (
                  <li key={index}>
                    {item.name}
                  </li>
                )
              })
            }
          </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps)(PeopleBox)
