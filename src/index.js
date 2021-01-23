import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './store'
import rootReducer from './reducers'

ReactDOM.render(
  //<Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  //</Provider>
  ,
  document.getElementById('root')
);
