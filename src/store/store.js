import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import {initState} from './selectors'
import reducer from './reducer'
import thunk from "redux-thunk";
// const initState={};
const store = createStore(reducer, initState, composeWithDevTools(applyMiddleware(thunk)));
export default store