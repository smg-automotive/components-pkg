import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from 'src';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

import MarkedTextComponent from '.';

const brandHighlight = 'brand.primary';

const meta: Meta<typeof MarkedTextComponent> = {
  title: 'Components/Utils/MarkedText',
  component: MarkedTextComponent,

  decorators: [
    (Story, { args }) => (
      <Box
        p="md"
        backgroundColor={
          args.highlightColor === 'white' ? 'gray.900' : 'transparent'
        }
      >
        <Story />
      </Box>
    ),
  ],

  args: {
    children: 'I am marked text',
    variant: 'highlight',
    fontSize: 'base',
    highlightColor: brandHighlight,
  },

  argTypes: {
    ...getRecipeControls('markedText'),
    children: {
      control: { type: 'text' },
    },
    highlightColor: {
      options: ['white', 'gray.100', brandHighlight],
      control: { type: 'select' },
      if: { arg: 'variant', eq: 'highlight' },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof MarkedTextComponent> = {};

export const BrandHighlight: StoryObj<typeof MarkedTextComponent> = {
  args: {
    variant: 'highlight',
    highlightColor: brandHighlight,
  },
};

export const GrayHighlight: StoryObj<typeof MarkedTextComponent> = {
  args: {
    variant: 'highlight',
    highlightColor: 'gray.100',
  },
};

export const WhiteHighlight: StoryObj<typeof MarkedTextComponent> = {
  args: {
    variant: 'highlight',
    highlightColor: 'white',
  },
};

export const Underline: StoryObj<typeof MarkedTextComponent> = {
  args: {
    variant: 'underline',
  },
};
