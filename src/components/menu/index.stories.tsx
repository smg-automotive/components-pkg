import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Box } from '../box';

import MenuComponent from './index';

const meta: Meta<typeof MenuComponent> = {
  title: 'Patterns/Data Display/Menu',
  component: MenuComponent,

  decorators: [
    (Story) => (
      <Box h="lg">
        <Story />
      </Box>
    ),
  ],

  args: {
    items: [
      { text: 'Detusch', onClick: action('Detusch'), value: 'de' },
      { text: 'English', onClick: action('English'), value: 'en' },
      { text: 'Français', onClick: action('Français'), value: 'fr' },
      { text: 'Italiano', onClick: action('Italiano'), value: 'it' },
    ],
    title: 'Language',
    showChevron: true,
  },
};
export default meta;

export const Overview: StoryObj<typeof MenuComponent> = {};
