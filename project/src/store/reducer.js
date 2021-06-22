import { ActionType } from './action';
import offers from '../mocks/offers.json';
import getCities from '../utils/getCities';

const initialCities = getCities(offers);
const initialCity = initialCities[0];

const initialState = {
  cities: initialCities,
  city: initialCity,
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
