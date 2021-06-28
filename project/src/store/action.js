export const ActionType = {
  SET_CITY: 'main/setCity',
  REDIRECT_TO_ROUTE: 'main/redirectToRoute',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOAD_OFFERS: 'data/loadOffers',
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
};
