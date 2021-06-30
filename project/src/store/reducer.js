import { ActionType } from './action';
import { CITIES, EMPTY_OFFER_DATA, AuthorizationStatus } from '../const';

const initialState = {
  city: CITIES['Paris'].name,
  offers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  comments: [],
  user: null,
  offerData: EMPTY_OFFER_DATA,
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
    case ActionType.SET_OFFER_DATA:
      return {
        ...state,
        offerData: {
          ...state.offerData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export { reducer };
