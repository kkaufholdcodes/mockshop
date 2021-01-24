import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import createStore from './createReduxStore'

const store = createStore()


ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
