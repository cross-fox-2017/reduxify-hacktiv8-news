import React, { Component } from 'react'
import Release2 from './Release2.js'
import SearchForm from './SearchForm.js'

export class Home extends Component {

  render () {
    return (
      <div className='App'>
        <fieldset>
          <legend>
            Release #2:
          </legend>
          <Release2 />
          <SearchForm />
        </fieldset>
      </div>
    )
  }
}

// <br/>
// <fieldset>
//   <legend>
//     Release #5:
//   </legend>
//   <Release5 dataApi={this.state.data_API} currentApiSearch={this.state.currentApiSearch} />
//   <SearchApi handleApiChange={this.handleApiChange} />
// </fieldset>

// <SearchForm handleChange={this.handleChange} />
