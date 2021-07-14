import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import RoomScreen from './room-screen';

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

let store = null;
let fakeApp = null;
let history = null;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('Component: Room', () => {
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
          <RoomScreen />
        </Router>
      </Provider>
    );
  });

  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText('The house among olive')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
    expect(screen.getByText('4.7')).toBeInTheDocument();
    expect(screen.getByText('Washer')).toBeInTheDocument();
    expect(screen.getByText('Air conditioning')).toBeInTheDocument();
    expect(screen.getByText('Meet the host')).toBeInTheDocument();
    expect(screen.getByText('Angelina')).toBeInTheDocument();
  });
});
