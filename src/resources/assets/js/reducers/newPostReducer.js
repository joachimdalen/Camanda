export default function reducer(state={
    post: {
      id: null,
      title: null,
      summary: null,
      tags: []
    },
    saving: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "SAVE_POST": {
        return {...state, saving: true}
      }
      case "SAVE_POST_REJECTED": {
        return {...state, saving: false, error: action.payload}
      }
      case "SAVE_POST_FULFILLED": {
        return {
          ...state,
          saving: false,
          post: action.payload,
        }
      }
      case "SET_POST_TITLE": {
        return {
          ...state,
          user: {...state.post, title: action.payload},
        }
      }
      case "SET_POST_SUMMARY": {
        return {
          ...state,
          user: {...state.post, summary: action.payload},
        }
      }
    }
    return state
}