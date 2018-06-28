export const FETCH_POST = 'editPost/FETCH_POST';
export const FETCH_POST_FULFILLED = 'editPost/FETCH_POST_FULFILLED';
export const FETCH_POST_REJECTED = 'editPost/FETCH_POST_REJECTED';

export function fetchPost(id) {
    return function (dispatch) {
        dispatch({
            type: FETCH_POST
        });
        axios.get(`/api/blog/posts/${id}`, {})
            .then((response) => {
                dispatch({
                    type: FETCH_POST_FULFILLED,
                    payload: response.data.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: FETCH_POST_REJECTED,
                    payload: err
                })
            })
    }
}