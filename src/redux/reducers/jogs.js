import { jog as initialState } from '../initialState';
import {
    GET_JOGS_FAIL,
    GET_JOGS_REQUEST,
    GET_JOGS_SUCCESS,
} from '../actions/jogs';


export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_JOGS_REQUEST:
            return {
                ...state,
                pending: true
            };
        case GET_JOGS_SUCCESS:
            return {
                ...state,
                jogs: payload,
                pending: false
            };
        case GET_JOGS_FAIL:
            return {
                ...state,
                error: payload,
                pending: false
            };
        default:
            return state;
    }
};
