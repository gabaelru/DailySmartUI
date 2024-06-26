import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {thunk} from 'redux-thunk';

import Home from "./components/home";
import reducers from "./reducers";

import Results from './components/results';

const createStoreWithMiddleware = applyMiddleware(thunk)(compose((window.devToolsExtension ? 
  window.devToolsExtension() : f => f)(createStore)));

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/results' component={Results}/>
          </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
