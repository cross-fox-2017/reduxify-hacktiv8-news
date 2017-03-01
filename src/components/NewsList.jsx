import React from 'react'
import { connect } from 'react-redux'

class NewsList extends React.Component {
  render () {
    return (
      <span className='list-group'>
        {
          this.props.news
            .filter(data => {
            return data.title.toLowerCase().indexOf(this.props.searchkey.toLowerCase()) !== -1
          })
            .map((berita, index) => {
            return (
              <p key={index}>
                <a href={berita.url} target="_blank">
                  {berita.title}
                </a>
              </p>
            )
          })
        }
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
    searchkey : state.cari
  }
}

export default connect(mapStateToProps)(NewsList)
