import { ActionType } from './action';

const initialState = {
  city: null,
  offers: [],
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
