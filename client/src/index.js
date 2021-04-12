import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Directory from "./components/Directory";

ReactDOM.render(
  <React.StrictMode>
    <Directory />
  </React.StrictMode>,
  document.getElementById('root')
);

//^ replaced <App/> with <Authenticate /> 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
