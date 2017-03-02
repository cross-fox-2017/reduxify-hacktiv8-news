// import React, { Component } from 'react'
//
// export class People extends Component {
//   constructor () {
//     super()
//     this.state = {
//       people: []
//     }
//   }
//   componentWillMount () {
//     this.fetchNews()
//   }
//
//   fetchNews () {
//     let url = `http://swapi.co/api/people/`
//     const that = this
//     fetch(url)
//       .then(function (response) {
//         return response.json()
//       })
//       .then(function (data) {
//         let temp = []
//         data.results.map((people) => {
//           return temp.push({
//             name: people.name,
//             height: people.height,
//             gender: people.gender
//           })
//         })
//         that.setState({
//           people: temp
//         })
//       })
//   }
//
//   render () {
//     return (
//       <div className='People'>
//         <fieldset>
//           <legend>
//             #Starwars
//           </legend>
//           <Starwars dataApi={this.state.people} />
//         </fieldset>
//       </div>
//     )
//   }
//
// }
