import { combineReducers } from 'redux'
import NewsReducers from './reducerNews'
import PeopleReducers from './reducerPeople'
import SearchNewsReducers from './reducerSearchNews'
import SearchPeopleReducers from './reducerSearchPeople'

const rootReducers = combineReducers({
  news: NewsReducers,
  people: PeopleReducers,
  searchNews: SearchNewsReducers,
  searchPeople: SearchPeopleReducers
})

export default rootReducers
