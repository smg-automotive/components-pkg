import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { accordionRecipe } from 'src/themes/shared/slotRecipes/accordion';

import { CheckmarkIcon, InformationIcon, TimeIcon } from '../icons';
import { AccordionPanel } from './AccordionPanel';
import { AccordionItem } from './AccordionItem';
import { AccordionButton } from './AccordionButton';

import { Accordion } from './index';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

const meta: Meta<typeof Accordion> = {
  title: 'Patterns/Navigation/Accordion',
  component: Accordion,
  args: {
    multiple: true,
    variant: 'light',
  },
  argTypes: {
    ...getRecipeControls(accordionRecipe),

    multiple: {
      control: { type: 'boolean' },
    },
    children: {
      table: { disable: true },
    },
    unstyled: {
      table: { disable: true },
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof Accordion>;
export const Overview: StoryType = {
  name: 'Overview',
  args: {
    children: Array.from({ length: 3 }).map((_, i) => (
      <AccordionItem key={`item-${i}`} value={`item-${i}`}>
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
      <AccordionItem key={`item-${i}`} value={`item-${i}`}>
        <AccordionButton leftIcon={icon}>Section {i + 1}</AccordionButton>
        <AccordionPanel>Section {i + 1} content.</AccordionPanel>
      </AccordionItem>
    )),
  },
};
