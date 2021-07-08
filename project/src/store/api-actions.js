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
import CommentAdapter from '../utils/commentAdapter';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(OfferAdapter.getOffers(data))))
);

export const fetchOfferData = (id) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(generatePath(APIRoute.OFFER, { id })),
    api.get(generatePath(APIRoute.NEARBY, { id })),
    api.get(generatePath(APIRoute.COMMENTS, { id }))],
  )
    .then((values) =>
      // Promise.all: Order of resolved values?
      // Shortly, the order is preserved.
      // https://stackoverflow.com/q/28066429/1775459
      dispatch(updateOffer({
        offer: {
          ...OfferAdapter.getOffer(values[0].data),
          nearby: OfferAdapter.getOffers(values[1].data),
          comments: CommentAdapter.getComments(values[2].data),
        },
      })))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setUser(UserAdapter.getUser(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(setUser(null)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(UserAdapter.getUser(data)));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => {
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logUserOut()));
};

export const postComment = ({ id, comment, rating }) => (dispatch, _getState, api) => (
  api.post(generatePath(APIRoute.COMMENTS, { id }), {comment, rating})
    .then(({data}) =>
      dispatch(updateOffer({
        offer: {
          id,
          comments: CommentAdapter.getComments(data),
        },
      })))
);

export const updateFavoriteStatus = ({ id, status }) => (dispatch, _getState, api) => (
  api.post(generatePath(APIRoute.FAVORITE_STATUS, { id, status }))
    .then(({data}) =>
      dispatch(updateOffer({
        offer: OfferAdapter.getOffer(data),
      })))
    .catch(() => dispatch(redirectToRoute(AppRoute.LOGIN)))
);

