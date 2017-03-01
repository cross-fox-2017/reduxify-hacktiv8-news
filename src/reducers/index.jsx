import { combineReducers } from 'redux'
import {NewsList, SearchNews} from './NewsReducer.jsx'
import PeoplesReducer from './PeoplesReducer.jsx'
import {Baru} from './reducerbaru.jsx'

const rootReducers = combineReducers({
  news: NewsList,
  orang: PeoplesReducer,
  cari: SearchNews,
  baru: Baru
})

export default rootReducers
