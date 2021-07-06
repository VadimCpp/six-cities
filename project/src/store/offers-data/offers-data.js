
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
      state.offers = {
        ...state.offers,
        [action.payload.offer.id]: {
          ...state.offers[action.payload.offer.id],
          ...action.payload.offer,
        },
      };
    });
});

export { offersData };
