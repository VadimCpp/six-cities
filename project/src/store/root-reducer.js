import { combineReducers } from 'redux';
import { offersData } from './offers-data/offers-data';
import { citiesData } from './cities-data/cities-data';
import { userData } from './user-data/user-data';

export const NameSpace = {
  OFFERS: 'OFFERS',
  CITIES: 'CITIES',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.OFFERS]: offersData,
  [NameSpace.CITIES]: citiesData,
  [NameSpace.USER]: userData,
});
