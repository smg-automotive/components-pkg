import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { CheckmarkIcon, InformationIcon, TimeIcon } from '../icons';
import AccordionPanel from './AccordionPanel';
import AccordionItem from './AccordionItem';
import AccordionButton from './AccordionButton';

import Accordion from './index';

const meta: Meta<typeof Accordion> = {
  title: 'Patterns/Navigation/Accordion',
  component: Accordion,
  args: {
    allowMultiple: true,
    variant: 'light',
  },
  argTypes: {
    allowMultiple: {
      control: { type: 'boolean' },
    },
    variant: {
      options: ['light', 'dark', 'minimal'],
      control: { type: 'select' },
    },
    children: {
      table: { disable: true },
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof Accordion>;
export const Overview: StoryType = {
  args: {
    children: Array.from({ length: 3 }).map((_, i) => (
      <AccordionItem key={`item-${i}`}>
        <AccordionButton>Section {i + 1}</AccordionButton>
        <AccordionPanel>Section {i + 1} content.</AccordionPanel>
      </AccordionItem>
    )),
  },
};

const icons = [
  <InformationIcon color="orange.400" key="icon-1" />,
  <CheckmarkIcon color="green.400" key="icon-2" />,
  <TimeIcon key="icon-3" />,
];
export const WithIcons: StoryType = {
  name: 'With icons',

  args: {
    children: icons.map((icon, i) => (
      <AccordionItem key={`item-${i}`}>
        <AccordionButton leftIcon={icon}>Section {i + 1}</AccordionButton>
        <AccordionPanel>Section {i + 1} content.</AccordionPanel>
      </AccordionItem>
    )),
  },
};
