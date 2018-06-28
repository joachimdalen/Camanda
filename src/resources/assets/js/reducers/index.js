import {combineReducers} from "redux"
import {reducer as toastrReducer} from 'react-redux-toastr'
import newPost from "./newPostReducer"
import postsList from './postsListReducer';
import editPost from './editPostReducer';
export default combineReducers({
    toastr: toastrReducer,
    newPost: newPost,
    posts: postsList,
    editPost: editPost
})