import { combineReducers } from 'redux';
import filter from './filter';
import jogs from './jogs';
import user from './user';

export default combineReducers({
    filter, 
    jogs,
    user
});
