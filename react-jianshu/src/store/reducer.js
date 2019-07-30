import { combineReducers } from 'redux'
import headerReducer from '../components/header/store/reducer'

export default combineReducers({
   header: headerReducer
})