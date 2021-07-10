import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api';
import { APIRoute, AuthorizationStatus } from '../const';
import UserAdapter from '../utils/userAdapter';
import OfferAdapter from '../utils/offerAdapter';
import { ActionType } from './action';
import { checkAuth, login, fetchOfferList, logout } from './api-actions';

const MOCK_OFFERS = [
  {
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
    'title': 'The house among olive ',
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
  },
  {
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
];

const MOCK_USER = {
  'id': 25,
  'name': 'Angelina',
  'is_pro': true,
  'avatar_url': 'img/avatar-angelina.jpg',
  'email': 'test@test.ru',
};

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, MOCK_USER);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: UserAdapter.getUser(MOCK_USER),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, MOCK_USER);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: UserAdapter.getUser(MOCK_USER),
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOfferList();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, MOCK_OFFERS);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: OfferAdapter.getOffers(MOCK_OFFERS),
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logUserOut = logout();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(200);

    return logUserOut(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT,
        });
      });
  });
});
