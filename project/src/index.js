import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers.json';

ReactDOM.render(
  <React.StrictMode>
    <App places={offers.length} hotels={offers}/>
  </React.StrictMode>,
  document.getElementById('root'));
