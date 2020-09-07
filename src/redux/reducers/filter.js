import { filter as initialState } from '../initialState';
import { SET_IS_FILTER } from '../actions/filter';

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case SET_IS_FILTER:
            return {
                ...state,
                isFilter: !state.isFilter
            };
        default:
            return state;
    }
};