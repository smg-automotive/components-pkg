import React from 'react';

import { render, screen } from 'jest-utils';

import MobileOnlyAccordionPanel from '../MobileOnlyAccordionPanel';
import MobileOnlyAccordionItem from '../MobileOnlyAccordionItem';
import MobileOnlyAccordionButton from '../MobileOnlyAccordionButton';
import MobileOnlyAccordion from '../index';

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
    </MobileOnlyAccordion>,
  );

describe('<MobileOnlyAccordion />', () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
    jest.clearAllMocks();
  });

  it('should render with accordion with a hidden button on desktop', async () => {
    renderWrapper();

    const button = screen.getByRole('button');
    expect(button).toBeVisible();
  });
});
