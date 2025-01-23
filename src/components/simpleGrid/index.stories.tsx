import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from 'src';

import { SimpleGrid } from './index';

const meta: Meta<typeof SimpleGrid> = {
  title: 'Layout/SimpleGrid',
  component: SimpleGrid,
  decorators: [
    (Story) => (
      <Box maxW="container.sm" m="auto">
        <Story />
      </Box>
    ),
  ],

  parameters: {
    controls: {
      sort: 'alpha',
    },
  },

  args: {
    columns: 3,
    gap: 'md',
    children: [
      <Box h="lg" bg="blue.100" key="1">
        1
      </Box>,
      <Box h="lg" bg="green.100" key="2">
        2
      </Box>,
      <Box h="lg" bg="orange.100" key="3">
        3
      </Box>,
      <Box h="lg" bg="blue.200" key="4">
        4
      </Box>,
      <Box h="lg" bg="green.200" key="5">
        5
      </Box>,
      <Box h="lg" bg="orange.300" key="6">
        6
      </Box>,
    ],
  },

  argTypes: {
    gap: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],

      control: {
        type: 'select',
      },
    },
    rowGap: {
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

type StoryType = StoryObj<typeof SimpleGrid>;
export const Overview: StoryType = {};

/**
 * 2 columns on `2xs` 3 on `sm`. The same approach can be taken for other props.
 */
export const Responsive: StoryType = {
  args: {
    columns: {
      '2xs': 2,
      sm: 3,
    },
  },
};

/**
 * Adds a column when there's enough space for another child according to `minChildWidth`
 */
export const AutoResponsive: StoryType = {
  name: 'Auto-responsive',

  args: {
    columns: undefined,
    minChildWidth: '4xl',
  },
};
