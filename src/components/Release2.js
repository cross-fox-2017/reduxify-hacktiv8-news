import React from 'react'
import { connect } from 'react-redux'

// const doSearch = (props) => {
//   return props.datanumber2.filter((data) => {
//     return data.title === props.currentSearch
//   }).map((item) => {
//
//     return (
//       <li key={item.objectID}>
//         <a href={item.url} target='_blank'>
//           {item.title}
//         </a>
//         <small>{item.author}</small>
//       </li>
//     )
//   })
// }
// const showlist = (props) => {
//   return props.datanumber2.map((item) => {
//
//     return (
//       <li key={item.objectID}>
//         <a href={item.url} target='_blank'>
//           {item.title}
//         </a>
//       </li>
//     )
//   })
// }

class Release2 extends React.Component {
  render () {
    console.log(this.props);
    return (
      <div className='release2'>
        <ul>
          {this.props.news.map((item,index) => {
             return (
               <li key={index}>
                 <a href={item.url} target='_blank'>
                   {item.title}
                 </a>
               </li>
             )
           })}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    news: state.news
  }
}

export default connect(mapStateToProps, null)(Release2)
