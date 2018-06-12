import { applyMiddleware, createStore, compose } from "redux"
import { logger } from 'redux-logger'
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { createBrowserHistory, createHashHistory  } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import reducer from "../reducers"

//const history = createBrowserHistory()
const history = createHashHistory({
    hashType: 'hashbang',
  })
const middleware = applyMiddleware(promise(), thunk, logger, routerMiddleware(history))


//export default createStore(reducer, middleware)

const store = createStore(
    connectRouter(history)(reducer), // new root reducer with router state
    compose(middleware),
)
export {store, history};