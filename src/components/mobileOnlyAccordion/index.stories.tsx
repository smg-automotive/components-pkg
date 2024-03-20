import React from 'react';

import ListItem from '../list/ListItem';
import List from '../list';
import MobileOnlyAccordionPanel from './MobileOnlyAccordionPanel';
import MobileOnlyAccordionItem from './MobileOnlyAccordionItem';
import MobileOnlyAccordionButton from './MobileOnlyAccordionButton';

import MobileOnlyAccordionComponent from './index';

const Template = (args) => (
  <MobileOnlyAccordionComponent variant={args.variant}>
    <MobileOnlyAccordionItem>
      <MobileOnlyAccordionButton>{args.title}</MobileOnlyAccordionButton>
      <MobileOnlyAccordionPanel>{args.children}</MobileOnlyAccordionPanel>
    </MobileOnlyAccordionItem>
    <MobileOnlyAccordionItem>
      <MobileOnlyAccordionButton>{args.title}</MobileOnlyAccordionButton>
      <MobileOnlyAccordionPanel>{args.children}</MobileOnlyAccordionPanel>
    </MobileOnlyAccordionItem>
  </MobileOnlyAccordionComponent>
);

export default {
  title: 'Patterns/Navigation/MobileOnlyAccordion',
  component: MobileOnlyAccordionComponent,
};

export const MobileOnlyAccordion = {
  render: Template.bind({}),
  name: 'Mobile Only Accordion',

  parameters: {
    viewport: {},
  },

  args: {
    variant: 'light',
    title: 'Section title',

    children: (
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    ),
  },

  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: 'select',
    },
  },
};
