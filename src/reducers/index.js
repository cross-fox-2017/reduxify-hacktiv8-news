import { combineReducers } from 'redux'
import { newsListsReducer, searchKeywordReducer } from './reducerNews'
import { poepleListsReducer } from './reducerPeople'

const rootReducers = combineReducers({
  news: newsListsReducer,
  people: poepleListsReducer,
  searchKeyword: searchKeywordReducer
})

export default rootReducers
