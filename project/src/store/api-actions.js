import { generatePath } from 'react-router-dom';
import { ActionCreator } from './action';
import { AuthorizationStatus, APIRoute, AppRoute } from '../const';
import OfferAdapter from '../utils/offerAdapter';
import UserAdapter from '../utils/userAdapter';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(OfferAdapter.getOffers(data))))
);

export const fetchOfferData = (id) => (dispatch, _getState, api) => (
  api.get(generatePath(APIRoute.OFFER, { id }))
    .then(({data}) =>
      dispatch(ActionCreator.setOfferData({
        id: data.id,
        offer: OfferAdapter.getOffer(data),
      })),
    )
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.setUser(UserAdapter.getUser(data)));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => {
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()));
};
