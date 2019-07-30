import { createStore, compose } from 'redux'
import reducerName from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducerName,composeEnhancers())

export default store