import {
    FETCH_GENERAL_SETTINGS,
    FETCH_GENERAL_SETTINGS_FULFILLED,
    FETCH_GENERAL_SETTINGS_REJECTED, SET_SETTING
} from "../actions/settingActions";

export default function reducer(state = {
    groups: {
        general: null,
    },
    loading: false,
    error: null,
}, action) {
    switch (action.type) {
        case FETCH_GENERAL_SETTINGS: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_GENERAL_SETTINGS_REJECTED: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case FETCH_GENERAL_SETTINGS_FULFILLED: {
            return {
                ...state,
                loading: false,
                groups: {
                    ...state.groups,
                    general: action.payload.data
                }
            }
        }
        case  SET_SETTING: {
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.payload.group]: {
                        ...state.groups[action.payload.group],
                        [action.payload.key]: action.payload.value
                    }
                }
            }
        }
    }
    return state
}