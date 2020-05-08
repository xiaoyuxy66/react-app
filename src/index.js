import React from 'react';
import ReactDOM from 'react-dom';
// import './style.js';
import { GlobalStyle } from "./style.js";
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    {/* 后面的组件样式都会生效*/}
    <GlobalStyle />  
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);