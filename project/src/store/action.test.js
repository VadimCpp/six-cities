import {
  setCity,
  requireAuthorization,
  loadOffers,
  redirectToRoute,
  setUser,
  logout,
  updateOffer,
  ActionType
} from './action';

import { AuthorizationStatus, APIRoute } from '../const';

describe('Actions', () => {
  it('action creator for setting city', () => {
    const expectedAction = {
      type: ActionType.SET_CITY,
      payload: 'London',
    };

    expect(setCity('London')).toEqual(expectedAction);
  });

  it('action creator for auth status', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual(expectedAction);
  });

  it('action creator for load offers', () => {
    const someOffers = {
      1: {
        id: 1,
      },
      2: {
        id: 2,
      },
    };

    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: someOffers,
    };

    expect(loadOffers(someOffers)).toEqual(expectedAction);
  });

  it('action creator for route redirection', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: APIRoute.LOGIN,
    };

    expect(redirectToRoute(APIRoute.LOGIN)).toEqual(expectedAction);
  });

  it('action creator for setting user', () => {
    const someUser = {
      id: 1,
      name: 'John Doe',
    };
    const expectedAction = {
      type: ActionType.SET_USER,
      payload: someUser,
    };

    expect(setUser(someUser)).toEqual(expectedAction);
  });

  it('action creator for logging out', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });


  it('action creator for updating offer', () => {
    const someOffer = {
      id: 1,
      someString: 'some string',
    };
    const expectedAction = {
      type: ActionType.UPDATE_OFFER,
      payload: someOffer,
    };

    expect(updateOffer(someOffer)).toEqual(expectedAction);
  });
});
