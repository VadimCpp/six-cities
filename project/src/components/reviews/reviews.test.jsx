import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { AuthorizationStatus } from '../../const';
import Reviews from './reviews';

const MOCK_REVIEWS = [
  {
    'comment': 'A quiet cozy and picturesque Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 1,
    'rating': 4,
    'user': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 4,
      'isPro': false,
      'name': 'Max',
    },
  },
  {
    'comment': 'Awesome place in Moscow.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 2,
    'rating': 4,
    'user': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 4,
      'isPro': false,
      'name': 'Anna',
    },
  },
];

let store;

describe('Component: Review', () => {
  beforeEach(() => {
    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: { authorizationStatus: AuthorizationStatus.NO_AUTH, user: null },
    });
  });

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Reviews reviews={MOCK_REVIEWS} offerId={1} />
      </Provider>,
    );

    expect(getByText('Max')).toBeInTheDocument();
    expect(getByText('A quiet cozy and picturesque Amsterdam.')).toBeInTheDocument();
    expect(getByText('Anna')).toBeInTheDocument();
    expect(getByText('Awesome place in Moscow.')).toBeInTheDocument();
  });
});
