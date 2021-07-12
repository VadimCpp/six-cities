import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import NotFoundScreen from './not-found-screen';

let store = null;
let fakeApp = null;
let history = null;

describe('Component: RoomScreen', () => {
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
          <NotFoundScreen />
        </Router>
      </Provider>
    );
  });

  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText('Not Found')).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
