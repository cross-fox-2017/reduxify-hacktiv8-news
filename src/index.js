import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './App';
import './index.css';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers/index.js'
const createStoreMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreMiddleware(reducers)}>
    <Routers />
  </Provider>,
  document.getElementById('root')
);
