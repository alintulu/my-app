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
  students: [
     { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
     { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
     { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
     { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
  ]
}

const details = {
  test: [
    { id: 1, name: 'test1'}
  ]

}

const initialState = {
  details: details,
  elements: elements
}

const defaultState = {
  id: 1, name: '', age: undefined, email: 'undefined@email.com' 
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
