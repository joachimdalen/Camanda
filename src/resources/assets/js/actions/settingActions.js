export const FETCH_GENERAL_SETTINGS = 'setting/FETCH_GENERAL_SETTINGS';
export const FETCH_GENERAL_SETTINGS_FULFILLED = 'setting/FETCH_GENERAL_SETTINGS_FULFILLED';
export const FETCH_GENERAL_SETTINGS_REJECTED = 'setting/FETCH_GENERAL_SETTINGS_REJECTED';

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