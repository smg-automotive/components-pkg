import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';

import StackComponent from './index';

const meta: Meta<typeof StackComponent> = {
  title: 'Layout/Stack',
  component: StackComponent,

  parameters: {
    controls: {
      sort: 'alpha',
    },
  },

  args: {
    align: 'center',
    direction: 'row',
    spacing: 'md',
    wrap: 'wrap',
    children: [
      <Box w="40px" h="40px" bg="blue.100" key="1">
        1
      </Box>,
      <Box w="50px" h="50px" bg="green.100" key="2">
        2
      </Box>,
      <Box w="60px" h="60px" bg="orange.100" key="3">
        3
      </Box>,
    ],
  },

  argTypes: {
    align: {
      options: ['start', 'center', 'end'],

      control: {
        type: 'select',
      },
    },

    direction: {
      options: ['row', 'column'],

      control: {
        type: 'select',
      },
    },

    justify: {
      options: [
        'start',
        'space-around',
        'space-between',
        'space-evenly',
        'center',
        'end',
      ],

      control: {
        type: 'select',
      },
    },

    spacing: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],

      control: {
        type: 'select',
      },
    },

    children: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof StackComponent>;
export const Overview: StoryType = {};

/**
 * Default `col` direction switches to `row` on `sm` viewport.
 */
export const Responsive: StoryType = {
  args: {
    direction: {
      '2xs': 'column',
      sm: 'row',
    },
  },

  argTypes: {
    direction: {
      table: {
        disable: true,
      },
    },
  },
};
