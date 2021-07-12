import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { AuthorizationStatus } from '../../const';
import Header from './header';

let store = null;
let fakeApp = null;
let history = null;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('Component: Host', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const createFakeStore = configureStore({});
    store = createFakeStore({
      OFFERS: { offers: null, isDataLoaded: true },
      CITIES: { city: 'Paris' },
      USER: { authorizationStatus: AuthorizationStatus.NO_AUTH, user: null },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>
    );
  });

  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
