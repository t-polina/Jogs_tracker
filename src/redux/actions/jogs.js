export const GET_JOGS_REQUEST = 'GET_JOGS_REQUEST';
export const GET_JOGS_SUCCESS = 'GET_JOGS_SUCCESS';
export const GET_JOGS_FAIL = 'GET_JOGS_FAIL';

export const setJogsRequest = () => ({
    type: GET_JOGS_REQUEST
});

export const setJogsSuccess = jogs => ({
    type: GET_JOGS_SUCCESS,
    payload: jogs
});

export const setJogsFail = error => ({
    type: GET_JOGS_FAIL,
    payload: error
});