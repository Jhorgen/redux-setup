import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/productsReducer.js'
import userReducer from './reducers/userReducer.js'
import thunk from 'redux-thunk'




const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

const initialState = {
  products: [{ name: 'INITIAL STATE'}],
  user: 'Josh'
}

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
  allReducers, initialState,
  allStoreEnhancers
);



console.log(store.getState());

ReactDOM.render(<Provider store={store}>
<App aRandomProps="test" /> </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
