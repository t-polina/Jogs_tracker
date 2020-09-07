import * as actions from '../actions/user';
import axios from 'axios';
import requestWithHeaders from '../../utils/axiosWithHeaders';
import { getJogs } from './jogs';

export const getToken = login => async (dispatch) => {
    try {
        const { data } = await axios.post('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin', { uuid: login });
        localStorage.setItem('token', data.response.access_token);
    } catch (error) {
        console.error(error)
    }
};

export const getUser = () => async (dispatch) => {
    dispatch(actions.setUserRequest());
    try {
        const { data } = await requestWithHeaders.get('http://jogtracker.herokuapp.com/api/v1/auth/user');
        dispatch(getJogs(data.response.id));
        dispatch(actions.setUserSuccess(data.response));
        return data.response;
    } catch (error) {
        dispatch(actions.setUserFail(error));
        return error;
    }
};
