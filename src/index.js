import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import createStore from 'redux'

const store = createStore(reducer, action);


ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
