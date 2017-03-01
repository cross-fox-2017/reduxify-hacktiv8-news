import { combineReducers } from 'redux'
import NewsReducer from './ReducerNews'
import PeopleReducer from './ReducerPeople'

const rootReducers = combineReducers({
  news: NewsReducer,
  people: PeopleReducer
})

export default rootReducers
