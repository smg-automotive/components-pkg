import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { GlobeIcon, PlusIcon, StarIcon } from '../icons';
import Box from '../box';

import MenuComponent from './index';

const meta: Meta<typeof MenuComponent> = {
  title: 'Patterns/Data Display/Menu',
  component: MenuComponent,

  decorators: [
    (Story) => (
      <Box h="200px">
        <Story />
      </Box>
    ),
  ],

  args: {
    items: [
      { text: 'Detusch', onClick: action('Detusch') },
      { text: 'English', onClick: action('English') },
      { text: 'Français', onClick: action('Français') },
      { text: 'Italiano', onClick: action('Italiano') },
    ],
    title: 'Language',
  },
};
export default meta;

export const Overview: StoryObj<typeof MenuComponent> = {};

export const WithLeftIcon: StoryObj<typeof MenuComponent> = {
  args: {
    leftIcon: <GlobeIcon />,
  },
};

export const WithCustomRightIcon: StoryObj<typeof MenuComponent> = {
  args: {
    leftIcon: <StarIcon />,
    rightIcon: <PlusIcon />,
  },
};

export const WithNoRightIcon: StoryObj<typeof MenuComponent> = {
  args: {
    leftIcon: <GlobeIcon />,
    rightIcon: null,
  },
};

export const BackwardCompatibility: StoryObj<typeof MenuComponent> = {
  args: {
    icon: <GlobeIcon />,
  },
};
