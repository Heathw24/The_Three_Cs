import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';
import Authenticate from "../src/components/Authenticate";

ReactDOM.render(
  <React.StrictMode>
    <Authenticate />
  </React.StrictMode>,
  document.getElementById('root')
);

//^ replaced <App/> with <Authenticate /> 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
