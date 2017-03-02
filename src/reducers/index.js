import { combineReducers } from 'redux'
import NewsReducer from './reducer_news.js'
import NewsSearchReducer from './reducer_search_news.js'

const rootReducers = combineReducers({
  news: NewsSearchReducer

})

export default rootReducers
