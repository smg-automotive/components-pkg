import React from 'react';

import { MobileOnlyAccordionPanel } from '@/src/components/mobileOnlyAccordion/MobileOnlyAccordionPanel';
import { MobileOnlyAccordionItem } from '@/src/components/mobileOnlyAccordion/MobileOnlyAccordionItem';
import { MobileOnlyAccordionButton } from '@/src/components/mobileOnlyAccordion/MobileOnlyAccordionButton';
import { MobileOnlyAccordion } from '@/src/components/mobileOnlyAccordion/index';
import { render, screen } from '@/jest-utils';

const renderWrapper = () =>
  render(
    <MobileOnlyAccordion>
      <MobileOnlyAccordionItem value="">
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
