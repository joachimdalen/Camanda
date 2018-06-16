export default function reducer(state = {
    post: {
        id: null,
        title: null,
        summary: null,
        content: null,
        status: 0,
    },
    tags: [],
    saving: false,
    error: null,
}, action) {

    switch (action.type) {
        case "SAVE_POST": {
            return {
                ...state,
                saving: true
            }
        }
        case "SAVE_POST_REJECTED": {
            return {
                ...state,
                saving: false,
                error: action.payload
            }
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
                post: {
                    ...state.post,
                    title: action.payload
                },
            }
        }
        case "SET_POST_SUMMARY": {
            return {
                ...state,
                post: {
                    ...state.post,
                    summary: action.payload
                },
            }
        }
        case "ADD_POST_TAG": {
            if (state.tags.includes(action.payload)) return state;
            return {
                ...state,
                tags: [...state.tags, action.payload],
            }
        }
        case "REMOVE_POST_TAG": {
            if (!state.tags.includes(action.payload)) return state;
            let index = state.tags.indexOf(action.payload);
            if (index === -1) return state;
            return {
                ...state,
                tags: state.tags.filter(item => item !== state.tags[index]),
            }
        }
        case "SET_POST_CONTENT": {
            return {
                ...state,
                post: {
                    ...state.post,
                    content: action.payload
                },
            }
        }
        case "SET_POST_STATUS": {
            return {
                ...state,
                post: {
                    ...state.post,
                    status: action.payload
                },
            }
        }
    }
    return state
}