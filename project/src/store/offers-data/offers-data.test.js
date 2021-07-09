import { offersData } from './offers-data';
import { ActionType } from '../action';

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

const MOCK_OFFER = {
  'city': {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13,
    },
  },
  'preview': 'img/offers/offer_19.jpg',
  'images': [
    'img/offers/offer_2.jpg',
    'img/offers/offer_10.jpg',
    'img/offers/offer_18.jpg',
    'img/offers/offer_11.jpg',
    'img/offers/offer_14.jpg',
    'img/offers/offer_16.jpg',
    'img/offers/offer_17.jpg',
    'img/offers/offer_7.jpg',
    'img/offers/offer_1.jpg',
    'img/offers/offer_12.jpg',
    'img/offers/offer_4.jpg',
    'img/offers/offer_3.jpg',
    'img/offers/offer_6.jpg',
    'img/offers/offer_20.jpg',
  ],
  'title': 'The Pondhouse - A Magical Place',
  'isFavorite': false,
  'isPremium': false,
  'rating': 4.3,
  'type': 'hotel',
  'bedrooms': 4,
  'maxAdults': 5,
  'price': 448,
  'goods': [
    'Breakfast',
    'Air conditioning',
    'Laptop friendly workspace',
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
    'latitude': 48.87561,
    'longitude': 2.375499,
    'zoom': 16,
  },
  'id': 3,
};

describe('Reducer: offersData', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersData(undefined, {}))
      .toEqual({
        offers: {},
        isDataLoaded: false,
      });
  });

  it('should load offers', () => {
    const state = {
      offers: {},
      isDataLoaded: false,
    };
    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: MOCK_OFFERS,
    };

    expect(offersData(state, loadOffersAction))
      .toEqual({
        offers: MOCK_OFFERS,
        isDataLoaded: true,
      });
  });

  it('should update offer', () => {
    const updatedMock = {
      ...MOCK_OFFERS,
      3: {
        ...MOCK_OFFER,
      },
    };
    const state = {
      offers: MOCK_OFFERS,
      isDataLoaded: true,
    };
    const updateOfferAction = {
      type: ActionType.UPDATE_OFFER,
      payload: { offer: MOCK_OFFER },
    };

    expect(offersData(state, updateOfferAction))
      .toEqual({
        offers: updatedMock,
        isDataLoaded: true,
      });
  });
});
