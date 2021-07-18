import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import rootReducer from './store/root-reducer';
import { requireAuthorization } from './store/action';
import { redirect } from './store/middlewares/redirect';
import { checkAuth, fetchOfferList } from './store/api-actions';
import App from './components/app/app';
import { createAPI } from './services/api';
import { AuthorizationStatus } from './const';
import browserHistory from './browser-history';

let store = null;

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchOfferList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
