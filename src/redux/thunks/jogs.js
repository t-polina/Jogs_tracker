import * as actions from '../actions/jogs';
import requestWithHeaders from '../../utils/axiosWithHeaders';

export const getJogs = userId => async (dispatch) => {
    dispatch(actions.setJogsRequest());
    try {
        const { data } = await requestWithHeaders.get('http://jogtracker.herokuapp.com/api/v1/data/sync');
        const jogs = data.response.jogs.filter(jog => jog.user_id === userId);
        dispatch(actions.setJogsSuccess(jogs));
    } catch (error) {

        dispatch(actions.setJogsFail(error));
    }
};

export const createJog = jog => async (dispatch) => {
    try {
        await requestWithHeaders.post('http://jogtracker.herokuapp.com/api/v1/data/jog', jog);
    } catch (error) {
        console.error(error)
    }
};

export const updateJog = jog => async (dispatch) => {
    try {
        await requestWithHeaders.put('http://jogtracker.herokuapp.com/api/v1/data/jog', jog);
    } catch (error) {
        console.error(error)
    }
};