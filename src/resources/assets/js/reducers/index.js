import {
  combineReducers
} from "redux"

import newPost from "./newPostReducer"
import postsList from './postsListReducer';
export default combineReducers({
  newPost: newPost,
  posts: postsList
})