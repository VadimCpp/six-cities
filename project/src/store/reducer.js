import { ActionType } from './action';
import { CITIES } from '../const';
import offers from '../mocks/offers.json';

const initialState = {
  city: CITIES['Paris'].name,
  offers: offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    default:
      return state;
  }
};

export { reducer };
