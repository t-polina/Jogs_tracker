export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const setUserRequest = () => ({
    type: GET_USER_REQUEST
});

export const setUserSuccess = user => ({
    type: GET_USER_SUCCESS,
    payload: user
});

export const setUserFail = error => ({
    type: GET_USER_FAIL,
    payload: error
});