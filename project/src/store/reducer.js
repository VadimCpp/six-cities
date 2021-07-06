import { ActionType } from './action';
import { CITIES, AuthorizationStatus } from '../const';

const initialState = {
  city: CITIES['Paris'].name,
  offers: {},
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  comments: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.UPDATE_OFFER: {
      return {
        ...state,
        offers: {
          ...state.offers,
          [action.payload.offer.id]: {
            ...state.offers[action.payload.offer.id],
            ...action.payload.offer,
          },
        },
      };
    }
    default:
      return state;
  }
};

export { reducer };
