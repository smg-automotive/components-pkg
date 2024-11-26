import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from 'src';

import { Stack, StackProps, StackSeparator } from './index';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,

  parameters: {
    controls: {
      sort: 'alpha',
    },
  },

  args: {
    align: 'center',
    children: 'boxes',
    direction: 'row',
    justify: 'center',
    gap: 'md',
    wrap: 'wrap',
    margin: '0',
    padding: '0',
    width: '8xl',
    separator: 'none' as unknown as StackProps['separator'],
  },

  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['stretch', 'center', 'start', 'end'],
    },

    children: {
      table: {
        disable: true,
      },
      mapping: {
        boxes: [
          <Box minW="md" minH="md" bg="blue.100" key="1">
            1
          </Box>,
          <Box minW="lg" minH="lg" bg="green.100" key="2">
            2
          </Box>,
          <Box minW="xl" minH="xl" bg="orange.100" key="3">
            3
          </Box>,
        ],
      },
    },
    separator: {
      control: { type: 'select' },
      options: ['none', '<StackSeparator />'],
      mapping: {
        none: undefined,
        '<StackSeparator />': <StackSeparator />,
      },
    },

    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },

    justify: {
      control: { type: 'select' },
      options: [
        'start',
        'space-around',
        'space-between',
        'space-evenly',
        'center',
        'end',
      ],
    },

    wrap: {
      control: { type: 'select' },
      options: ['wrap', 'nowrap', 'wrap-reverse'],
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof Stack>;
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
};

export const WithASeparator: StoryType = {
  args: {
    separator: '<StackSeparator />' as unknown as StackProps['separator'],
  },
};
