export const ActionType = {
  SET_CITY: 'main/setCity',
  SET_OFFERS: 'main/setOffers',
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  setOffers: (offers) => ({
    type: ActionType.SET_OFFERS,
    payload: offers,
  }),
};
