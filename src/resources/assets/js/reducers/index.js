import {
  combineReducers
} from "redux"

import newPost from "./newPostReducer"

export default combineReducers({
  newPost: newPost
})