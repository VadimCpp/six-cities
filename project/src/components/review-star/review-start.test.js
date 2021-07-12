import React from 'react';
import { render } from '@testing-library/react';
import ReviewStart from './review-star';

describe('Component: ReviewStar', () => {
  it('should render correctly', () => {
    const { getByTitle } = render(
      <ReviewStart stars={5} title="good" onRatingChange={() => {}} isChecked />,
    );

    expect(getByTitle('good')).toBeInTheDocument();
  });
});
