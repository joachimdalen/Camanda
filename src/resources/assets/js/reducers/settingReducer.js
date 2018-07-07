import {
    FETCH_GENERAL_SETTINGS,
    FETCH_GENERAL_SETTINGS_FULFILLED,
    FETCH_GENERAL_SETTINGS_REJECTED
} from "../actions/settingActions";

export default function reducer(state = {
    groups: {
        general: null,
    },
    loading: false,
    error: null,
}, action) {
    switch (action.type) {
        case FETCH_GENERAL_SETTINGS:
            {
                return { ...state,
                    loading: true
                }
            }
        case FETCH_GENERAL_SETTINGS_REJECTED:
            {
                return { ...state,
                    loading: false,
                    error: action.payload
                }
            }
        case FETCH_GENERAL_SETTINGS_FULFILLED:
            {
                return {
                    ...state,
                    loading: false,
                    groups: { ...state.groups,
                        general: action.payload.data
                    }
                }
            }
    }
    return state
}