import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Box from '../box';

import Flex from './index';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,

  args: {
    direction: 'row',
    align: 'center',
    justify: 'center',
    children: [
      <Box p="sm" bg="green.200" margin="sm" key="child-1">
        Element 1
      </Box>,
      <Box p="md" bg="orange.300" margin="sm" key="child-2">
        Element 2
      </Box>,
    ],
  },

  argTypes: {
    direction: {
      options: ['row', 'column'],
      control: 'select',
    },
    align: {
      options: ['stretch', 'center', 'start', 'end'],
      control: 'select',
    },

    justify: {
      options: [
        'start',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      control: 'select',
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof Flex>;
export const Row: StoryType = {};

export const Column: StoryType = {
  args: {
    direction: 'column',
    align: 'stretch',
  },
};
