import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Box } from '../box';

import MenuComponent from './index';
import { Center } from '../center';
import { VideoIcon } from '../icons';

const meta: Meta<typeof MenuComponent> = {
  title: 'Patterns/Data Display/Menu',
  component: MenuComponent,

  decorators: [
    (Story) => (
      <Center>
        <Box h="7xl" display="flex" alignItems="center">
          <Story />
        </Box>
      </Center>
    ),
  ],
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top-start',
        'top',
        'top-end',
        'bottom-start',
        'bottom',
        'bottom-end',
        'left-start',
        'left',
        'left-end',
        'right-start',
        'right',
        'right-end',
      ],
    },
    fontWeightTitle: {
      control: 'select',
      options: ['regular', 'bold'],
    },
    iconSpacing: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
  args: {
    items: [
      { text: 'Deutsch', onClick: action('Deutsch'), value: 'de' },
      { text: 'English', onClick: action('English'), value: 'en' },
      { text: 'Français', onClick: action('Français'), value: 'fr' },
      { text: 'Italiano', onClick: action('Italiano'), value: 'it' },
    ],
    title: 'Language',
    showChevron: true,
    placement: 'bottom-start',
    offset: [8, 0],
    fontWeightTitle: 'regular',
    menuColor: 'gray.900',
    iconSpacing: 'sm',
  },
};
export default meta;

export const Overview: StoryObj<typeof MenuComponent> = {};

export const WithLeftIcon: StoryObj<typeof MenuComponent> = {
  args: {
    icon: <VideoIcon />,
  },
  argTypes: {
    icon: {
      table: { disable: true },
    },
  },
};
