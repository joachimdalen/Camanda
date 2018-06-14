  export function setPostTitle(title) {
    return {
      type: 'SET_POST_TITLE',
      payload: title,
    }
  }

  export function setPostSummary(summary) {
    return {
      type: 'SET_POST_SUMMARY',
      payload: summary,
    }
  }

  export function addPostTag(tag) {
    return {
      type: 'ADD_POST_TAG',
      payload: tag
    }
  }

  export function removePostTag(tag) {
    return {
      type: 'REMOVE_POST_TAG',
      payload: tag
    }
  }
  export function setPostContent(content) {
    return {
      type: 'SET_POST_CONTENT',
      payload: content
    }
  }

  export function savePost(title, summary, tags, content, status) {
    return function (dispatch) {
      dispatch({
        type: "SAVE_POST"
      });
      axios.post("/api/blog/posts", {
          title: title,
          content: content,
          summary: summary,
          tags: tags,
          status: status
        })
        .then((response) => {
          dispatch({
            type: "SAVE_POST_FULFILLED",
            payload: response.data
          })
        })
        .catch((err) => {
          dispatch({
            type: "SAVE_POST_REJECTED",
            payload: err
          })
        })
    }
  }