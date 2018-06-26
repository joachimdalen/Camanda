import {FETCH_POSTS, FETCH_POSTS_FULFILLED, FETCH_POSTS_REJECTED, UPDATE_POST_STATUS, UPDATE_POST_STATUS_FULFILLED, UPDATE_POST_STATUS_REJECTED} from "../actions/postsListActions";

export default function reducer(state = {
    posts: null,
    loading: false,
    error: null,
}, action) {
    switch (action.type) {
        case FETCH_POSTS: {
            return {...state, loading: true}
        }
        case FETCH_POSTS_REJECTED: {
            return {...state, loading: false, error: action.payload}
        }
        case FETCH_POSTS_FULFILLED: {
            return {
                ...state,
                loading: false,
                posts: action.payload,
            }
        }
        case UPDATE_POST_STATUS: {
            return state;
        }
        case UPDATE_POST_STATUS_REJECTED: {
            return state;
        }
        case UPDATE_POST_STATUS_FULFILLED: {
            let index = state.posts.data.findIndex(obj => obj.id === action.payload.id);
            let newPosts = state.posts.data;
            console.log({index: index, newPosts: newPosts});
            newPosts[index].status = action.payload['status'];
            newPosts[index].status_text = action.payload.status_text;
            return {
                ...state,
                posts: {...state.posts, data: newPosts},
                error: null
            }

        }
    }
    return state
}