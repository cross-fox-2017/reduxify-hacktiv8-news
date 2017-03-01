import { combineReducers } from 'redux'
import NewsReducer from './reducer_news.js'
import { SearchReducer } from './reducer_search.js'

const rootReducers = combineReducers({
  news: NewsReducer,
  searchKey: SearchReducer
})

export default rootReducers
