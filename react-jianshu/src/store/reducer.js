import { combineReducers } from 'redux-immutable'
import headerReducer from '../components/header/store/reducer'

export default combineReducers({
   header: headerReducer
})