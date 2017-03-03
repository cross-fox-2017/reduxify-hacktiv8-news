import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchNews, resetSearchKey } from '../../actions'

const styles = {
  width: '30%',
  padding: '0px 10px'
}

class DataSearch extends Component {
  componentDidMount () {
    this.props.fetchNews()
  }

  render () {
    return (
      <div>
        <form>
          <label>
            Search:
          </label>
          <input
            style={styles}
            type='text'
            value={this.props.searchKey}
            onChange={(event) => {this.props.fetchNews(event.target.value)}}
          />
        </form>
        {this.props.searchKey !== ''
          ?
          <h6>Search Result for: {this.props.searchKey}</h6>
          :
          <h6>Showing All Results</h6>
        }
        {this.props.searchKey !== ''
          ?
          <button className='btn' onClick={this.props.resetSearchKey}>
            Reset Search
          </button>
          :
          true
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchKey: state.searchKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchNews, resetSearchKey}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DataSearch)
