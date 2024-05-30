import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import {createStore} from 'redux'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store}  from './store/index';

// const  defaultState = { t:0 }

// const reducer = (state = defaultState, action) => {
// switch(action.type){
// case  'ADD':
//   return{...state, t:5}
// default: return state
// }
// }
//const store = createStore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

