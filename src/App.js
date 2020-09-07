import React from 'react';
import { BrowserRouter } from "react-router-dom";
import store from './redux/store';
import { Provider } from 'react-redux'
import Router from "./routes";
import Header from './components/Header';

import './style.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
