
import { ActionType } from '../action';
import { AuthorizationStatus } from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: null,
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
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
    default:
      return state;
  }
};

export { userData };
