export const ActionType = {
  SET_CITY: 'main/setCity',
  REDIRECT_TO_ROUTE: 'main/redirectToRoute',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOAD_OFFERS: 'data/loadOffers',
  SET_USER: 'user/setUser',
  LOGOUT: 'user/logout',
  UPDATE_OFFER: 'data/updateOffer',
};

export const setCity = (city) => ({
  type: ActionType.SET_CITY,
  payload: city,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setUser = (user) => ({
  type: ActionType.SET_USER,
  payload: user,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});

export const updateOffer = (offer) => ({
  type: ActionType.UPDATE_OFFER,
  payload: offer,
});
