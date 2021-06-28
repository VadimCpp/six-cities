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
