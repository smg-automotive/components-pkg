import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

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
    showChevron: true,
  },
};
export default meta;

export const Overview: StoryObj<typeof MenuComponent> = {};
