import { user as initialState } from '../initialState';
import {
    GET_USER_FAIL,
    GET_USER_REQUEST,
    GET_USER_SUCCESS
} from '../actions/user';

export default function (state = initialState, { type, payload }) {
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
                isLoading: false,
                pending: false
            };
        case GET_USER_FAIL:
            return {
                ...state,
                error: payload,
                pending: false
            };
        default:
            return state;
    };
};