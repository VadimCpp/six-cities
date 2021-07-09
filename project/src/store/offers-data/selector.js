import { createSelector } from 'reselect';
import { NameSpace } from '../root-reducer';
import { getCity } from '../cities-data/selector';

export const getOffers = (state) => state[NameSpace.OFFERS].offers;
export const getIsDataLoaded = (state) => state[NameSpace.OFFERS].isDataLoaded;

export const getOffersForCity = createSelector(
  getOffers,
  getCity,
  (offers, city) => Object.values(offers).filter((o) => o.city.name === city),
);
