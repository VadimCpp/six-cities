import { ActionType } from './action';
import offers from '../mocks/offers.json';
import getCities from '../utils/getCities';

const cities = getCities(offers);
const initialCity = cities[0];
const initialOffers = offers.filter((o) => o.city.name === initialCity.name);

const initialState = {
  city: initialCity,
  offers: initialOffers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_STEP: {
      return {
        ...state,
        city: action.payload,
      };
    }
    case ActionType.SET_OFFERS: {
      return {
        ...state,
        offers: action.payload,
      };
    }
    default:
      return state;
  }
};

export { reducer };
