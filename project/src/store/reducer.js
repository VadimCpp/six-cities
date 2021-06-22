import { ActionType } from './action';

const initialState = {
  city: null,
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
