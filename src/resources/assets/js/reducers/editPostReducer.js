import {FETCH_POST, FETCH_POST_FULFILLED, FETCH_POST_REJECTED} from "../actions/editPostActions";

export default function reducer(state = {
    post: null,
    loading: false,
    saving: false,
    error: null,
}, action) {

    switch (action.type) {
        case FETCH_POST: {
            console.log('fetching');
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_POST_REJECTED: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case FETCH_POST_FULFILLED: {
            return {
                ...state,
                loading: false,
                post: action.payload,
                error: null,
            }
        }
    }
    return state
}