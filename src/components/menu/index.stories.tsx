import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Text } from '../text';
import { CheckmarkIcon, VideoIcon } from '../icons';
import { Flex } from '../flex';
import { Center } from '../center';
import { Box } from '../box';

import { Menu } from './index';

const meta: Meta<typeof Menu> = {
  title: 'Patterns/Data Display/Menu',
  component: Menu,

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

export const Overview: StoryObj<typeof Menu> = {};

export const WithLeftIcon: StoryObj<typeof Menu> = {
  args: {
    icon: <VideoIcon />,
  },
  argTypes: {
    icon: {
      table: { disable: true },
    },
  },
};

export const WithCustomItem: StoryObj<typeof Menu> = {
  args: {
    items: [
      {
        text: (
          <Flex>
            <CheckmarkIcon mr="sm" />
            <Text>Deutsch</Text>
          </Flex>
        ),
        onClick: action('Deutsch'),
        value: 'de',
      },
      {
        text: 'English',
        onClick: action('English'),
        value: 'en',
      },
    ],
  },
  argTypes: {
    items: {
      table: { disable: true },
    },
  },
};
