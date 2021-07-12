import React from 'react';
import { render } from '@testing-library/react';
import Review from './review';

const MOCK_REVIEW = {
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
};

describe('Component: Review', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <Review review={MOCK_REVIEW} />,
    );
    const userNameElement = getByText('Max');
    const commentElement = getByText('A quiet cozy and picturesque Amsterdam.');

    expect(userNameElement).toBeInTheDocument();
    expect(commentElement).toBeInTheDocument();
  });
});
