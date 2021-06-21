import { ActionType } from './action';
import offers from '../mocks/offers.json';
import getCities from '../utils/getCities';

const initialCities = getCities(offers);
const initialCity = initialCities[0];
const initialOffers = offers.filter((o) => o.city.name === initialCity.name);

const initialState = {
  cities: initialCities,
  allOffers: offers,
  city: initialCity,
  offers: initialOffers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY: {
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
