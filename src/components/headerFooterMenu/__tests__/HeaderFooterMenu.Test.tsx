import React from 'react';
import { render, screen } from '@testing-library/react';

import HeaderFooterMenu from '../index';
import HeaderFooterMenuSection from '../HeaderFooterMenuSection';

const mockMatchMedia = (match: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    value: jest.fn(() => ({
      matches: match,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    })),
  });
};

const renderWrapper = () =>
  render(
    <HeaderFooterMenu>
      <HeaderFooterMenuSection title="Section 1">
        <ul>
          <li>menu item 1</li>
          <li>menu item 2</li>
        </ul>
      </HeaderFooterMenuSection>
    </HeaderFooterMenu>
  );

describe('<HeaderFooterMenu />', () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
    jest.clearAllMocks();
  });

  it('should render with accordion', async () => {
    mockMatchMedia(true);

    renderWrapper();

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded');
  });

  it('should render without accordion', async () => {
    mockMatchMedia(false);

    const button = screen.queryByRole('button');

    expect(button).not.toBeInTheDocument();
  });
});
