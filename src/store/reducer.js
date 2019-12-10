import {initState} from './selectors'
import {
    GET_JOGS_FAIL,
    GET_JOGS_REQUEST,
    GET_JOGS_SUCCESS,
    GET_USER_FAIL,
    GET_USER_REQUEST,
    GET_USER_SUCCESS
} from "./actions";

const reducer = (state =initState, {type, payload} )=> {
    switch (type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: payload,
                isLoading:false
            };
        case GET_USER_FAIL:
            return {
                ...state,
                error: payload,
                isLoading:false
            };
        case GET_JOGS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_JOGS_SUCCESS:
            return {
                ...state,
                jogs: payload,
                isLoading:false
            };
        case GET_JOGS_FAIL:
            return {
                ...state,
                error: payload,
                isLoading:false
            };
        default: return state;
    }
};
export default reducer