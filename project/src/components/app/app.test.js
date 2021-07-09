import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthorizationStatus, AppRoute } from '../../const';
import App from './app';

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      OFFERS: { offers: {}, isDataLoaded: true },
      CITIES: { city: 'Paris' },
      USER: { authorizationStatus: AuthorizationStatus.NO_AUTH, user: null },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.ROOT);
    render(fakeApp);

    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByText('We could not find any property available at the moment in Paris')).toBeInTheDocument();
  });

  it('should render "LogiScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getAllByText('Sign in')).toHaveLength(3);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  //
  // TODO:
  // MainScreen +
  // LogiScreen +
  // RoomScreen -
  // FavoritesScreen -
  // NotFoundScreen -
  //
});
