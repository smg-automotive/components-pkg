import React from 'react';
import { render, screen } from '@testing-library/react';

import MobileOnlyAccordionPanel from '../MobileOnlyAccordionPanel';
import MobileOnlyAccordionItem from '../MobileOnlyAccordionItem';
import MobileOnlyAccordionButton from '../MobileOnlyAccordionButton';
import MobileOnlyAccordion from '../index';

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
    <MobileOnlyAccordion>
      <MobileOnlyAccordionItem>
        <MobileOnlyAccordionButton>Section 1</MobileOnlyAccordionButton>
        <MobileOnlyAccordionPanel>
          <ul>
            <li>menu item 1</li>
            <li>menu item 2</li>
          </ul>
        </MobileOnlyAccordionPanel>
      </MobileOnlyAccordionItem>
    </MobileOnlyAccordion>
  );

describe('<MobileOnlyAccordion />', () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
    jest.clearAllMocks();
  });

  it('should render with accordion', async () => {
    mockMatchMedia(false);

    renderWrapper();

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded');
  });

  it('should render without accordion', async () => {
    mockMatchMedia(true);

    renderWrapper();

    const button = screen.queryByRole('button');

    expect(button).not.toBeInTheDocument();
  });
});
