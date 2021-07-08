import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store/Store"

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
