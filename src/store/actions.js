export const GET_USER_REQUEST ='GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL='GET_USER_FAIL';
export const  GET_JOGS_REQUEST='GET_JOGS_REQUEST';
export const GET_JOGS_SUCCESS ='GET_JOGS_SUCCESS';
export const GET_JOGS_FAIL='GET_JOGS_FAIL';
export const SET_START_DATE='SET_START_DATE';
export const SET_END_DATE='SET_END_DATE';

export const setUserRequest =()=>({
    type:GET_USER_REQUEST
});
export const setUserSuccess =(user)=>({
    type:GET_USER_SUCCESS,
    payload:user
});
export const setUserFail =(error)=>({
    type:GET_USER_FAIL,
    payload:error
});
export const setJogsRequest =()=>({
    type:GET_JOGS_REQUEST
});
export const setJogsSuccess =(jogs)=>({
    type:GET_JOGS_SUCCESS,
    payload: jogs
});
export const setJogsFail =(error)=>({
    type:GET_JOGS_FAIL,
    payload: error
});
export const setStartDate =(start)=>({
    type:SET_START_DATE,
    payload: start
});
export const setEndDate=(end)=>({
    type:SET_END_DATE,
    payload: end
});