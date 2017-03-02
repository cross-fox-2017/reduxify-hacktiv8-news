import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './App'
import './index.css';
import thunk from 'redux-thunk'

import rootReducers from './Reducers'

// const store = createStore(rootReducers)

const createStoreMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreMiddleware(rootReducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
