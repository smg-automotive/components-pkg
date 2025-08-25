import React from 'react';

import { Brand } from 'src/types/brand';

import { render, screen } from 'jest-utils';

import DevOverlay from '../index';

describe('The DevOverlay Component', () => {
  it('renders the dev overlay', () => {
    render(
      <DevOverlay
        variables={[]}
        hideDevOverlay={jest.fn()}
        toggleTheme={jest.fn()}
        toggleTranslation={jest.fn()}
        activeTheme={Brand.AutoScout24}
        displayTranslationKeys={false}
      />,
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
        activeTheme={Brand.AutoScout24}
        toggleTranslation={jest.fn()}
        displayTranslationKeys={false}
      />,
    );

    expect(screen.getByText('Dummy')).toBeInTheDocument();
    expect(screen.getByText('Find me')).toBeInTheDocument();
  });
});
