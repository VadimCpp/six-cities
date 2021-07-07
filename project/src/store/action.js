import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  SET_CITY: 'main/setCity',
  REDIRECT_TO_ROUTE: 'main/redirectToRoute',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOAD_OFFERS: 'data/loadOffers',
  SET_USER: 'user/setUser',
  LOGOUT: 'user/logout',
  UPDATE_OFFER: 'data/updateOffer',
};

export const setCity = createAction(ActionType.SET_CITY, (city) => ({
  payload: city,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const setUser = createAction(ActionType.SET_USER, (user) => ({
  payload: user,
}));

export const logout = createAction(ActionType.LOGOUT);

export const updateOffer = createAction(ActionType.UPDATE_OFFER, (offer) => ({
  payload: offer,
}));
