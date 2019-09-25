import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';


function productsReducer(state = [], action) {
  return state;
}

function userReducer(state = '', action) {
  return state;
}

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

const initialState = {
  products: [{ name: 'tester mcGee'}],
  user: 'hello world'
}

const store = createStore(allReducers, initialState);

console.log(store.getState());


store.dispatch(action);
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
