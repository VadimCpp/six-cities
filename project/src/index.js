import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const places = 312;

ReactDOM.render(
  <React.StrictMode>
    <App places={places}/>
  </React.StrictMode>,
  document.getElementById('root'));
