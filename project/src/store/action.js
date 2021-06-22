export const ActionType = {
  SET_CITY: 'main/setCity',
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
};
