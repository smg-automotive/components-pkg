import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ListItem, ListRoot } from '../list';
import { MobileOnlyAccordionPanel } from './MobileOnlyAccordionPanel';
import { MobileOnlyAccordionItem } from './MobileOnlyAccordionItem';
import { MobileOnlyAccordionButton } from './MobileOnlyAccordionButton';

import { MobileOnlyAccordion, MobileOnlyAccordionProps } from './index';

const Template = ({
  sections,
  sectionItems,
  ...props
}: MobileOnlyAccordionProps & { sections: number; sectionItems: number }) => (
  <MobileOnlyAccordion {...props}>
    {Array.from({ length: sections }).map((_section, i) => (
      <MobileOnlyAccordionItem key={`section-${i}`} value={`item-${i}`}>
        <MobileOnlyAccordionButton>Section {i + 1}</MobileOnlyAccordionButton>
        <MobileOnlyAccordionPanel>
          <ListRoot>
            {Array.from({ length: sectionItems }).map((_item, j) => (
              <ListItem key={`item-${j}`}>Item {j + 1}</ListItem>
            ))}
          </ListRoot>
        </MobileOnlyAccordionPanel>
      </MobileOnlyAccordionItem>
    ))}
  </MobileOnlyAccordion>
);

const meta: Meta<typeof Template> = {
  title: 'Patterns/Navigation/MobileOnlyAccordion',
  component: MobileOnlyAccordion,
  render: Template.bind({}),

  args: {
    variant: 'light',
    multiple: false,
    collapsible: true,

    sections: 3,
    sectionItems: 3,
  },

  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
  },

  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: 'select',
    },
  },
};

export default meta;

/**
 * Make sure you're viewing this on a mobile viewport to see the accordion.
 */
export const Overview: StoryObj<typeof MobileOnlyAccordion> = {};
