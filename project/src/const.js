export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
  NOT_FOUND: '/404',
};

export const RATING_TO_PERCENT = 20; // same as / 5 * 100

export const CITIES = {
  Paris: {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13,
    },
  },
  Cologne: {
    'name': 'Cologne',
    'location': {
      'latitude': 50.938361,
      'longitude': 6.959974,
      'zoom': 13,
    },
  },
  Brussels: {
    'name': 'Brussels',
    'location': {
      'latitude': 50.846557,
      'longitude': 4.351697,
      'zoom': 13,
    },
  },
  Amsterdam: {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.37454,
      'longitude': 4.897976,
      'zoom': 13,
    },
  },
  Hamburg: {
    'name': 'Hamburg',
    'location': {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 13,
    },
  },
  Dusseldorf: {
    'name': 'Dusseldorf',
    'location': {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 13,
    },
  },
};

export const SortingTypes = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  OFFER: '/hotels/:id',
  NEARBY: '/hotels/:id/nearby',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments/:id',
  FAVORITE: '/favorite',
  FAVORITE_STATUS: '/favorite/:id/:status',
};

export const DEFAULT_IMG_WIDTH = '260';
export const DEFAULT_IMG_HEIGHT = '200';
