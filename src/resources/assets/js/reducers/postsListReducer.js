import {FETCH_POSTS, FETCH_POSTS_FULFILLED, FETCH_POSTS_REJECTED} from "../actions/postsListActions";

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
    }
    return state
}