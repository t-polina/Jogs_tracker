import * as actions from './actions';
import axios from 'axios';
import  requestWithHeaders from '../utils/axiosWithHeaders';

export const getToken =  (login) => async (dispatch) => {
    try {
        const {data} = await axios.post('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin', {uuid: login});
        localStorage.setItem('token', data.response.access_token);
    }catch (e) {
        console.log(e)
    }
};

export const getUser = () => async (dispatch)=>{
    dispatch(actions.setUserRequest());
    try{
       const {data} = await requestWithHeaders.get('http://jogtracker.herokuapp.com/api/v1/auth/user');
        dispatch(getJogs(data.response.id));
        dispatch(actions.setUserSuccess(data.response));
    }catch (e) {
        dispatch(actions.setUserFail(e));
    }
};


export const getJogs = (userId) => async (dispatch) =>{
    let jogs=[];
    dispatch(actions.setJogsRequest());
    try{
        const {data}=await requestWithHeaders.get('http://jogtracker.herokuapp.com/api/v1/data/sync');
        data.response.jogs.map(el => {
            if(el.user_id===userId){
             // dispatch(actions.setJogsSuccess(el))
                jogs.push(el)
            }
        });
        dispatch(actions.setJogsSuccess(jogs))
    }catch (e) {
        console.log(e)
        dispatch(actions.setJogsFail(e))
    }
};


export const createJog = (jog) => async (dispatch) =>{

    try{
        const {data}=await requestWithHeaders.post('http://jogtracker.herokuapp.com/api/v1/data/jog', jog);
console.log(data)
    }catch (e) {
        console.log(e)
    }
};

export const updateJog = (jog) => async (dispatch) =>{
    try{
        const {data}=await requestWithHeaders.put('http://jogtracker.herokuapp.com/api/v1/data/jog', jog);
        console.log(data)
    }catch (e) {
        console.log(e)
    }
};