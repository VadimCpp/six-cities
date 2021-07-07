import { NameSpace } from '../root-reducer';

export const getOffers = (state) => state[NameSpace.OFFERS].offers;
export const getIsDataLoaded = (state) => state[NameSpace.OFFERS].isDataLoaded;
