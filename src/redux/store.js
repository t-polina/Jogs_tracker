import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import initialState from './initialState'
import reducers from './reducers'
import thunk from 'redux-thunk';

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
