import React from 'react';
import { render, screen } from '@testing-library/react';

import DevOverlay from '../index';

describe('The DevOverlay Component', () => {
  it('renders the dev overlay', () => {
    render(
      <DevOverlay
        variables={[]}
        hideDevOverlay={jest.fn()}
        toggleTheme={jest.fn()}
      />
    );

    expect(screen.getByText('Dev Overlay')).toBeInTheDocument();
  });

  it('renders the passed variables', () => {
    render(
      <DevOverlay
        variables={[
          {
            name: 'Dummy',
            value: 'Find me',
          },
        ]}
        hideDevOverlay={jest.fn()}
        toggleTheme={jest.fn()}
      />
    );

    expect(screen.getByText('Dummy')).toBeInTheDocument();
    expect(screen.getByText('Find me')).toBeInTheDocument();
  });
});
