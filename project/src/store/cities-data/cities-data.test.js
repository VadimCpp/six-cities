import { citiesData } from './cities-data';
import { ActionType } from '../action';

describe('Reducer: citiesData', () => {
  it('without additional parameters should return initial state', () => {
    expect(citiesData(undefined, {}))
      .toEqual({city: 'Paris'});
  });

  it('should update city', () => {
    const state = {city: 'Paris'};
    const setCityAction = {
      type: ActionType.SET_CITY,
      payload: 'Moscow',
    };

    expect(citiesData(state, setCityAction))
      .toEqual({city: 'Moscow'});
  });
});
