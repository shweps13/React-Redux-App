import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import {reducer} from "./reducers/index"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const langState = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
  );

ReactDOM.render(
    <Provider store={langState}>
        <App />
    </Provider>
    , document.getElementById('root'));


    
serviceWorker.unregister();
