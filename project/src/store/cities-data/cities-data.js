
import { createReducer } from '@reduxjs/toolkit';
import { setCity } from '../action';
import { CITIES } from '../../const';

const initialState = {
  city: CITIES['Paris'].name,
};

const citiesData = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    });
});

export { citiesData };
