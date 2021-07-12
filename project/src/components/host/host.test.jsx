import React from 'react';
import { render, screen } from '@testing-library/react';
import Host from './host';

const MOCK_USER = {
  'id': 25,
  'name': 'Angelina',
  'isPro': true,
  'avatarUrl': 'img/avatar-angelina.jpg',
};

describe('Component: Host', () => {
  it('should render correctly', () => {
    render(
      <Host user={MOCK_USER} />,
    );

    expect(screen.getByText('Meet the host')).toBeInTheDocument();
    expect(screen.getByText('Angelina')).toBeInTheDocument();
  });
});
