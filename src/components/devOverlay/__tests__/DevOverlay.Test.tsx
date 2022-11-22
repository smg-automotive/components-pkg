import React from 'react';
import { render, screen } from '@testing-library/react';

import DevOverlay from '../index';
import { Brand } from '../../../types/brand';

describe('The DevOverlay Component', () => {
  it('renders the dev overlay', () => {
    render(
      <DevOverlay
        variables={[]}
        hideDevOverlay={jest.fn()}
        toggleTheme={jest.fn()}
        activeTheme={Brand.as24}
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
        activeTheme={Brand.as24}
      />
    );

    expect(screen.getByText('Dummy')).toBeInTheDocument();
    expect(screen.getByText('Find me')).toBeInTheDocument();
  });
});
