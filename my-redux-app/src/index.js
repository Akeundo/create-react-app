import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
//import { combineReducers, createStore} from 'redux' ;
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';
import { Provider } from 'react-redux';

/*const action = {
    type: 'changeState',
    payload: {
        newState: 'newState'
    }
};*/
const action = {
  type: 'updateState',
  payload: {
    newState: 'newer State',
  },
};
const allReducers = combineReducers({
  product: productReducer,
  user: userReducer,
});

const store = createStore(
  allReducers,
  {
    product: ['iphone', 'ipad', 'macbook'],
    user: 'test-user',
  },
  window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState());
store.dispatch(action); //this is how you do it
console.log(store.dispatch(action)); // state of our store before dispatch the action

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
