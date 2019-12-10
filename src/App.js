import React from 'react';
import {BrowserRouter} from "react-router-dom";
import store from './store/store';
import { Provider } from 'react-redux'
import Router from "./navigation/Router";

function App() {
  return (
      // <StartPage/>
      <Provider store={store}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </Provider>

  );
}

export default App;
