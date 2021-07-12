import React from 'react';
import { render, screen } from '@testing-library/react';
import { Sorting } from './sorting';

describe('Component: Sorting', () => {
  it('should render correctly', () => {
    render(
      <Sorting type="Popular" onSortingChange={() => {}} />,
    );

    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getByText('Popular')).toBeInTheDocument();
  });
});
