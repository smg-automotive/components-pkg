import React from 'react';
import { Meta } from '@storybook/react';

import Box from '../box';

import Flex, { type FlexProps } from './index';

const Template = (args: FlexProps) => (
  <Flex {...args}>
    <Box p="sm" bg="green.200" margin="sm">
      Element 1
    </Box>
    <Box p="md" bg="orange.300" margin="sm">
      Element 2
    </Box>
  </Flex>
);

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,

  args: {
    direction: 'row',
    align: 'center',
    justify: 'center',
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

export const Row = {
  render: Template.bind({}),
};

export const Column = {
  render: Template.bind({}),
  args: {
    direction: 'column',
    align: 'stretch',
  },
};

export default meta;
