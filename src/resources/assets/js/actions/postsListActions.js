export const FETCH_POSTS = 'postList/FETCH_POSTS';
export const FETCH_POSTS_FULFILLED = 'postList/FETCH_POSTS_FULFILLED';
export const FETCH_POSTS_REJECTED = 'postList/FETCH_POSTS_REJECTED';

export const UPDATE_POST_STATUS = 'postList/UPDATE_POST_STATUS';
export const UPDATE_POST_STATUS_FULFILLED = 'postList/UPDATE_POST_STATUS_FULFILLED';
export const UPDATE_POST_STATUS_REJECTED = 'postList/UPDATE_POST_STATUS_REJECTED';

export function fetchPosts() {
    return function (dispatch) {
        dispatch({type: FETCH_POSTS});
        axios.get(`/api/blog/posts`)
            .then((response) => {
                dispatch({type: FETCH_POSTS_FULFILLED, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: FETCH_POSTS_REJECTED, payload: err})
            })
    }
}

export function changePostPublishStatus(id, status) {
    return function (dispatch) {
        dispatch({type: UPDATE_POST_STATUS});
        axios.put(`/api/blog/posts/status`, {id: id, status: status})
            .then((response) => {
                dispatch({type: UPDATE_POST_STATUS_FULFILLED, payload: response.data.data})
            })
            .catch((err) => {
                dispatch({type: UPDATE_POST_STATUS_REJECTED, payload: err})
            })
    }
}