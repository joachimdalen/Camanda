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