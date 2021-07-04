import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import { movieReducer } from "./reducers/movieReducer";

const store = createStore(movieReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
