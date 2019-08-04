import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducerName from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducerName,composeEnhancers(
    applyMiddleware(thunk)
))

export default store