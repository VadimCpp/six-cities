
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
      const offerId = action.payload.offer.id;
      const updatedOffers = {
        ...state.offers,
        [offerId]: {
          ...state.offers[offerId],
          ...action.payload.offer,
        },
      };

      //
      // NOTE!
      // Алгоритм обходит все рекомендуемые и при необходимости обновляет их.
      //
      for (const anId in updatedOffers) {
        const offer = updatedOffers[anId];
        if (offer.nearby) {
          let isNearbyFound = false;

          for (const nearbyId in offer.nearby) {
            const nearbyOffer = offer.nearby[nearbyId];
            if (nearbyOffer.id === offerId) {
              isNearbyFound = true;
              break;
            }
          }

          if (isNearbyFound) {
            offer.nearby = {
              ...offer.nearby,
              [offerId]: action.payload.offer,
            };
          }
        }
      }
      state.offers = updatedOffers;
    });
});

export { offersData };
