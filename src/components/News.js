import React, { Component } from 'react';
import NewsList from './NewsList.js';
import NewsForm from './NewsForm'
export class News extends Component {
  render() {
    return (
      <div>
        <NewsForm />
        <NewsList />
      </div>
    );
  }
}
