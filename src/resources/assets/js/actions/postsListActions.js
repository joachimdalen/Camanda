export function fetchPosts() {
    return function(dispatch) {
      dispatch({type: "FETCH_POSTS"});
      axios.get("/api/blog/posts")
        .then((response) => {
          dispatch({type: "FETCH_POSTS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "FETCH_POSTS_REJECTED", payload: err})
        })
    }
  }