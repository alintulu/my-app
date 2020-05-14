import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers } from 'redux'

const elements = {
  images: [
    { id: 1, name: 'CMSSW_10_6_8_patch1', tag: '2020-02-19-df153472', createdAt: '2020-02-19'},
    { id: 2, name: 'CMSSW_10_6_8_patch1', tag: '2020-05-12-cdf5c9a1', createdAt: '2020-05-12'},
    { id: 3, name: 'CMSSW_7_1_25_patch5', tag: '2020-02-13-899c1373', createdAt: '2020-02-13'},
    { id: 4, name: 'CMSSW_7_1_25_patch5', tag: '2020-02-18-847c8252', createdAt: '2020-02-18'},
    { id: 5, name: 'CMSSW_9_2_1', tag: '2020-02-19-df153472', createdAt: '2020-02-19'},
    { id: 6, name: 'CMSSW_9_3_9', tag: '2020-02-19-5e7c8abc', createdAt: '2020-02-19'},
  ]
}

const myReducer = (state = elements, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    demo: myReducer
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
