export const SET_POST_TITLE = 'newPost/SET_POST_TITLE';
export const SET_POST_SUMMARY = 'newPost/SET_POST_SUMMARY';
export const ADD_POST_TAG = 'newPost/ADD_POST_TAG';
export const REMOVE_POST_TAG = 'newPost/REMOVE_POST_TAG';
export const SET_POST_CONTENT = 'newPost/SET_POST_CONTENT';
export const SET_POST_STATUS = 'newPost/SET_POST_STATUS';
export const SAVE_POST = 'newPost/SAVE_POST';
export const SAVE_POST_FULFILLED = 'newPost/SAVE_POST_FULFILLED';
export const SAVE_POST_REJECTED = 'newPost/SAVE_POST_REJECTED';
export const SET_POST_PREVIEW_IMAGE = 'newPost/SET_POST_PREVIEW_IMAGE';
export const SET_POST_HEADER_IMAGE = 'newPost/SET_POST_HEADER_IMAGE';


export function setPostTitle(title) {
    return {
        type: SET_POST_TITLE,
        payload: title,
    }
}

export function setPostSummary(summary) {
    return {
        type: SET_POST_SUMMARY,
        payload: summary,
    }
}

export function addPostTag(tag) {
    return {
        type: ADD_POST_TAG,
        payload: tag
    }
}

export function removePostTag(tag) {
    return {
        type: REMOVE_POST_TAG,
        payload: tag
    }
}

export function setPostContent(content) {
    return {
        type: SET_POST_CONTENT,
        payload: content
    }
}

export function setPostStatus(status) {
    return {
        type: SET_POST_STATUS,
        payload: status
    }
}

export function setPostPreviewImage(url) {
    return {
        type: SET_POST_PREVIEW_IMAGE,
        payload: url
    }
}

export function setPostHeaderImage(url) {
    return {
        type: SET_POST_HEADER_IMAGE,
        payload: url
    }
}

export function savePost(title, summary, tags, content, status, headerImage, previewImage) {
    return function (dispatch) {
        dispatch({
            type: SAVE_POST
        });
        axios.post("/api/blog/posts", {
            title: title,
            content: content,
            summary: summary,
            tags: tags,
            status: status,
            header_image: headerImage,
            preview_image: previewImage
        })
            .then((response) => {
                dispatch({
                    type: SAVE_POST_FULFILLED,
                    payload: response.data.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: SAVE_POST_REJECTED,
                    payload: err
                })
            })
    }
}