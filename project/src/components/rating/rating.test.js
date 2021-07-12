import React from 'react';
import { render } from '@testing-library/react';
import Rating from './rating';

describe('Component: Rating', () => {
  it('should render correctly', () => {
    const { getByTitle } = render(
      <Rating onRatingChange={() => {}} rating={5} />,
    );

    expect(getByTitle('perfect')).toBeInTheDocument();
    expect(getByTitle('good')).toBeInTheDocument();
    expect(getByTitle('not bad')).toBeInTheDocument();
    expect(getByTitle('badly')).toBeInTheDocument();
    expect(getByTitle('terribly')).toBeInTheDocument();
  });
});
