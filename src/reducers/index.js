import {combineReducers} from 'redux'
import NewsReducer from './reducer_news.js'
import PeopleReducer from './reducer_people.js'
import SearchNewsReducer from './reducer_searchNews.js'
const rootReducers = combineReducers({
  news: NewsReducer,
  peoples: PeopleReducer,
  searchKey: SearchNewsReducer
})

export default rootReducers
