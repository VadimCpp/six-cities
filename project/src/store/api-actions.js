import { generatePath } from 'react-router-dom';
import {
  loadOffers,
  updateOffer,
  redirectToRoute,
  setUser,
  requireAuthorization,
  logout as logUserOut
} from './action';
import { AuthorizationStatus, APIRoute, AppRoute } from '../const';
import OfferAdapter from '../utils/offerAdapter';
import UserAdapter from '../utils/userAdapter';
import ReviewAdapter from '../utils/reviewAdapter';

import mockOffers from '../mocks/offers.json';

//
// NOTE!
// Никогда не знаешь, когда умрет обучающий сервер HTML академии:
// const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
//
// Необходимо позаботиться о том, чтобы исходники показывали тестовые данные.
// Для этого добавлена переменная DEBUG.
//
// Установить DEBUG = true для использования тестовых данных (сервер не нужен)
// Установить DEBUG = false для обычной работы с сервером
//
const DEBUG = true;

if (DEBUG) {
  // eslint-disable-next-line no-console
  console.log('Development mode. Backend is mocked.');
}

export const fetchOfferList = () => (dispatch, _getState, api) => {
  if (DEBUG) {
    return dispatch(loadOffers(OfferAdapter.getOffers(mockOffers)));
  } else {
    return api.get(APIRoute.OFFERS)
      .then(({data}) => dispatch(loadOffers(OfferAdapter.getOffers(data))));
  }
};

export const fetchOfferData = (id) => (dispatch, _getState, api) => {
  if (DEBUG) {
    return dispatch(updateOffer(undefined));
  } else {
    return Promise.all([
      api.get(generatePath(APIRoute.OFFER, {id})),
      api.get(generatePath(APIRoute.NEARBY, {id})),
      api.get(generatePath(APIRoute.COMMENTS, {id}))],
    )
      .then((values) =>
        // Promise.all: Order of resolved values?
        // Shortly, the order is preserved.
        // https://stackoverflow.com/q/28066429/1775459
        dispatch(updateOffer({
          offer: {
            ...OfferAdapter.getOffer(values[0].data),
            nearby: values[1].data.map((o) => o.id),
            reviews: ReviewAdapter.getReviews(values[2].data),
          },
        })))
      .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)));
  }
};

export const checkAuth = () => (dispatch, _getState, api) => {
  if (DEBUG) {
    return dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
  } else {
    return api.get(APIRoute.LOGIN)
      .then(({data}) => dispatch(setUser(UserAdapter.getUser(data))))
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
      .catch(() => dispatch(setUser(null)));
  }
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  if (DEBUG) {
    // eslint-disable-next-line no-alert
    alert('Ошибка! В режиме использования тестовых данных логин не работает');
    return dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
  } else {
    return api.post(APIRoute.LOGIN, {email, password})
      .then(({data}) => {
        localStorage.setItem('token', data.token);
        dispatch(setUser(UserAdapter.getUser(data)));
      })
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)));
  }
};

export const logout = () => (dispatch, _getState, api) => {
  if (DEBUG) {
    return dispatch(logUserOut());
  } else {
    api.delete(APIRoute.LOGOUT)
      .then(() => localStorage.removeItem('token'))
      .then(() => dispatch(logUserOut()));
  }
};

export const postComment = ({ id, comment, rating }) => (dispatch, _getState, api) => {
  if (DEBUG) {
    return dispatch(updateOffer(undefined));
  } else {
    return api.post(generatePath(APIRoute.COMMENTS, {id}), {comment, rating})
      .then(({data}) =>
        dispatch(updateOffer({
          offer: {
            id,
            reviews: ReviewAdapter.getReviews(data),
          },
        })));
  }
};

export const updateFavoriteStatus = ({ id, status }) => (dispatch, _getState, api) => {
  if (DEBUG) {
    return dispatch(redirectToRoute(AppRoute.LOGIN));
  } else {
    return api.post(generatePath(APIRoute.FAVORITE_STATUS, {id, status}))
      .then(({data}) =>
        dispatch(updateOffer({
          offer: OfferAdapter.getOffer(data),
        })))
      .catch(() => dispatch(redirectToRoute(AppRoute.LOGIN)));
  }
};

