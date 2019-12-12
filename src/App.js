import React from 'react';
import {BrowserRouter} from "react-router-dom";
import store from './store/store';
import { Provider } from 'react-redux'
import Router from "./navigation/Router";
import NavBar from "./view/compoments/NavBar/NavBar";

function App() {
  return (
      <Provider store={store}>
        <NavBar/>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </Provider>

  );
}

export default App;
