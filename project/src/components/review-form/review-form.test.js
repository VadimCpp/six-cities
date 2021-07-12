import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { AuthorizationStatus } from '../../const';
import ReviewForm from './review-form';

let store;

describe('Component: ReviewForm', () => {
  beforeEach(() => {
    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: { authorizationStatus: AuthorizationStatus.AUTH, user: null },
    });
  });

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ReviewForm offerId={1} />
      </Provider>,
    );
    expect(getByText('Submit')).toBeInTheDocument();
  });
});
