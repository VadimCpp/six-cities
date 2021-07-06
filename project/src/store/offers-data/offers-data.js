
import { ActionType } from '../action';

const initialState = {
  offers: {},
  isDataLoaded: false,
};

const offersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
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

export { offersData };
