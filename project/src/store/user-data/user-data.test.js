import { AuthorizationStatus } from '../../const';
import { ActionType } from '../action';
import { userData } from './user-data';

const MOCK_USER = {
  'id': 25,
  'name': 'Angelina',
  'isPro': true,
  'avatarUrl': 'img/avatar-angelina.jpg',
};

describe('Reducer: userData', () => {
  it('without additional parameters should return initial state', () => {
    expect(userData(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        user: null,
      });
  });

  it('should set user', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      user: null,
    };
    const setUserAction = {
      type: ActionType.SET_USER,
      payload: MOCK_USER,
    };

    expect(userData(state, setUserAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        user: MOCK_USER,
      });
  });

  it('should require authorization', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      user: null,
    };
    const requireAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(userData(state, requireAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        user: null,
      });
  });

  it('should logout', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      user: null,
    };
    const logoutAction = {
      type: ActionType.LOGOUT,
    };

    expect(userData(state, logoutAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: null,
      });
  });
});
