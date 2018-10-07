export const FETCH_GENERAL_SETTINGS = 'setting/FETCH_GENERAL_SETTINGS';
export const FETCH_GENERAL_SETTINGS_FULFILLED = 'setting/FETCH_GENERAL_SETTINGS_FULFILLED';
export const FETCH_GENERAL_SETTINGS_REJECTED = 'setting/FETCH_GENERAL_SETTINGS_REJECTED';
export const SET_SETTING = 'setting/SET_SETTING';
export const SAVE_SETTINGS = 'setting/SAVE_SETTINGS';
export const SAVE_SETTINGS_FULFILLED = 'setting/SAVE_SETTINGS_FULFILLED';
export const SAVE_SETTINGS_REJECTED = 'setting/SAVE_SETTINGS_REJECTED';

export function fetchGeneral() {
    return function (dispatch) {
        dispatch({
            type: FETCH_GENERAL_SETTINGS
        });
        axios.get(`/api/setting/general`)
            .then((response) => {
                dispatch({
                    type: FETCH_GENERAL_SETTINGS_FULFILLED,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: FETCH_GENERAL_SETTINGS_REJECTED,
                    payload: err
                })
            })
    }
}

export function setSetting(key, value, group) {
    return {
        type: SET_SETTING,
        payload: {key: key, value: value, group: group}
    }
}

export function saveSetting(settings) {
    return function (dispatch) {
        dispatch({
            type: SAVE_SETTINGS
        });
        axios.put(`/api/setting`, {
            settings
        }).then((response) => {
            dispatch({
                type: SAVE_SETTINGS_FULFILLED,
            })
        }).catch((err) => {
            dispatch({
                type: SAVE_SETTINGS_REJECTED,
            })
        })
    }

}