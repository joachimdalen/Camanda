import { applyMiddleware, createStore, compose } from "redux"
import { logger } from 'redux-logger'
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { createBrowserHistory, createHashHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import reducer from "../reducers"

/*
    Create history used by react-router to navigate.
*/
//const history = createBrowserHistory()
//Some rendering is handled server side, use hash router to prevent 404s.
const history = createHashHistory({
    hashType: 'hashbang',
})

//Set up middleware to handle our logic between requests.
const middleware = applyMiddleware(promise(), thunk, logger, routerMiddleware(history))


//Connect our router and middleware and finally create the store for Redux.
const store = createStore(
    connectRouter(history)(reducer),
    compose(middleware),
)
//Export store and history to be imported by the connected router and Redux provider.
export { store, history };