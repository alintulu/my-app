import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers } from 'redux'
import 'semantic-ui-css/semantic.min.css';

import elements from './data/images.json';
import releases from './data/cmssw_releases.json';

const initialState = {
  elements: elements,
  releases: releases
}

const myDemoReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const defaultDownShift = {
  chosen_release: ""
};

const DownShiftReducer = (state = defaultDownShift, action) => {
  const new_chosen_release = action.chosen_release;
  switch (action.type) {
    case 'CHANGE':
      return {
        chosen_release: new_chosen_release
      }
    default:
      return state;
  }
}

const initalBuildImageState = {
  image: "",
  scram_arch: "",
  compatible_scram_arch: {
    release: "",
    scram_archs: []
  }
};

const BuildImageReducer = (state = initalBuildImageState, action) => {
  const request_image = action.request_image;
  const request_scram_arch = action.request_scram_arch;
  const scram_arch_list = action.scram_arch_list;
  switch (action.type) {
    case 'REQUEST_IMAGE':
      return {
        ...state,
        image: request_image,
        scram_arch: ""
      }
    case 'REQUEST_SCRAM_ARCH':
      return {
        ...state,
        scram_arch: request_scram_arch
      }
    case 'CREATE_SCRAM_ARCH_LIST':
      return {
        ...state,
        compatible_scram_arch: scram_arch_list
      }
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    demo: myDemoReducer,
    downShift: DownShiftReducer,
    buildImage: BuildImageReducer
  })
);

console.log("Reducer is", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
