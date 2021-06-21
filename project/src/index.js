import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app/app';
import offers from './mocks/offers.json';
import comments from './mocks/comments.json';
import { reducer } from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} comments={comments}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
