import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from 'connected-react-router'
import AppLayout from "./components/back/AppLayout"
import {store, history} from "./store/store"

if (document.getElementById('app')) {
  ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
      <AppLayout  />
    </ConnectedRouter>
  </Provider>, document.getElementById('app'));
}