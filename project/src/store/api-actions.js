import { generatePath } from 'react-router-dom';
import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      //
      // NOTE!
      // С бэка приходят переменные в формате snake_case
      // Поэтому происходить преобразование к camelCase
      //
      // * Вместо паттерна Адаптер
      //
      data.forEach((offer) => {
        offer.preview = offer['preview_image'];
        offer.maxAdults = offer['max_adults'];
        offer.isPremium = offer['is_premium'];
        offer.host.avatarUrl = offer['host']['avatar_url'];
        offer.host.isPro = offer['host']['is_pro'];
      });

      dispatch(ActionCreator.loadOffers(data));
    })
);

export const fetchOfferData = (id) => (dispatch, _getState, api) => (
  api.get(generatePath(APIRoute.OFFER, { id }))
    .then(({data}) => {

      //
      // NOTE!
      // С бэка приходят переменные в формате snake_case
      // Поэтому происходить преобразование к camelCase
      //
      // * Вместо паттерна Адаптер
      //
      data.preview = data['preview_image'];
      data.maxAdults = data['max_adults'];
      data.isPremium = data['is_premium'];
      data.host.avatarUrl = data['host']['avatar_url'];
      data.host.isPro = data['host']['is_pro'];

      dispatch(ActionCreator.setOfferData({
        id: data.id,
        offer: data,
      }));
    })
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
      const userData = {
        avatarUrl: data['avatar_url'],
        email: data['email'],
        id: data['id'],
        isPro: data['is_pro'],
        name: data['name'],
      };
      dispatch(ActionCreator.setUser(userData));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => {
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()));
};
