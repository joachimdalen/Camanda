import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import AppLayout from "./components/back/AppLayout"
import store from "./store/store"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  <AppLayout />
</Provider>, app);