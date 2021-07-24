
import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, updateOffer } from '../action';

const initialState = {
  offers: {},
  isDataLoaded: false,
};

const offersData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(updateOffer, (state, action) => {
      const offerId = action.payload?.offer?.id;
      if (offerId) {
        state.offers = {
          ...state.offers,
          [offerId]: {
            ...state.offers[offerId],
            ...action.payload.offer,
          },
        };
      }
    });
});

export { offersData };
