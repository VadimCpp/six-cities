import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router, generatePath } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthorizationStatus, AppRoute } from '../../const';
import App from './app';

const MOCK_OFFERS = {
  1: {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13,
      },
    },
    'preview': 'img/offers/offer_8.jpg',
    'images': [
      'img/offers/offer_18.jpg',
      'img/offers/offer_7.jpg',
      'img/offers/offer_8.jpg',
      'img/offers/offer_12.jpg',
      'img/offers/offer_5.jpg',
      'img/offers/offer_3.jpg',
      'img/offers/offer_10.jpg',
      'img/offers/offer_1.jpg',
      'img/offers/offer_13.jpg',
      'img/offers/offer_9.jpg',
      'img/offers/offer_15.jpg',
      'img/offers/offer_4.jpg',
      'img/offers/offer_16.jpg',
      'img/offers/offer_14.jpg',
    ],
    'title': 'The house among olive',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.7,
    'type': 'house',
    'bedrooms': 2,
    'maxAdults': 8,
    'price': 450,
    'goods': [
      'Laptop friendly workspace',
      'Breakfast',
      'Washer',
      'Air conditioning',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    'location': {
      'latitude': 53.546341000000005,
      'longitude': 10.022654000000001,
      'zoom': 16,
    },
    'id': 1,
    'nearby': [],
    'reviews': [],
  },
  2: {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13,
      },
    },
    'preview': 'img/offers/offer_4.jpg',
    'images': [
      'img/offers/offer_2.jpg',
      'img/offers/offer_8.jpg',
      'img/offers/offer_20.jpg',
      'img/offers/offer_18.jpg',
      'img/offers/offer_10.jpg',
      'img/offers/offer_15.jpg',
      'img/offers/offer_6.jpg',
      'img/offers/offer_19.jpg',
      'img/offers/offer_11.jpg',
      'img/offers/offer_3.jpg',
      'img/offers/offer_9.jpg',
      'img/offers/offer_5.jpg',
      'img/offers/offer_17.jpg',
      'img/offers/offer_16.jpg',
    ],
    'title': 'Canal View Prinsengracht',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.3,
    'type': 'house',
    'bedrooms': 4,
    'maxAdults': 5,
    'price': 672,
    'goods': [
      'Laptop friendly workspace',
      'Fridge',
      'Breakfast',
      'Towels',
      'Baby seat',
      'Air conditioning',
      'Washer',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'location': {
      'latitude': 53.528341000000005,
      'longitude': 10.018654000000002,
      'zoom': 16,
    },
    'id': 2,
  },
};

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      OFFERS: { offers: MOCK_OFFERS, isDataLoaded: true },
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

  it('should render "LoginScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getAllByText('Sign in')).toHaveLength(3);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('should render "RoomScreen" when user navigate to "/room/1"', () => {
    history.push(generatePath(AppRoute.ROOM, { id: 1 }));
    render(fakeApp);

    expect(screen.getByText('The house among olive')).toBeInTheDocument();
    expect(screen.getByText('Laptop friendly workspace')).toBeInTheDocument();
    expect(screen.getByText('Breakfast')).toBeInTheDocument();
    expect(screen.getByText('Washer')).toBeInTheDocument();
    expect(screen.getByText('Air conditioning')).toBeInTheDocument();
  });

  it('should render "FavoritesScreen" when user navigate to "/favorite"', () => {
    history.push(AppRoute.FAVORITES);
    render(fakeApp);

    expect(screen.getAllByText('Sign in')).toHaveLength(3);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to "/favorite"', () => {
    history.push('/not-existed-route');
    render(fakeApp);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });
});
