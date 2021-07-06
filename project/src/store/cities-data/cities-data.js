
import { ActionType } from '../action';
import { CITIES } from '../../const';

const initialState = {
  city: CITIES['Paris'].name,
};

const citiesData = (state = initialState, action) => {
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

export { citiesData };
