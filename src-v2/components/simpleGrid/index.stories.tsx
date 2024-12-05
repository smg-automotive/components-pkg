import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';

import SimpleGridComponent from './index';

const meta: Meta<typeof SimpleGridComponent> = {
  title: 'Layout/SimpleGrid',
  component: SimpleGridComponent,
  decorators: [
    (Story) => (
      <Box maxW={600} m="auto">
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
    spacing: 'md',
    children: [
      <Box h="50px" bg="blue.100" key="1">
        1
      </Box>,
      <Box h="50px" bg="green.100" key="2">
        2
      </Box>,
      <Box h="50px" bg="orange.100" key="3">
        3
      </Box>,
      <Box h="50px" bg="blue.200" key="4">
        4
      </Box>,
      <Box h="50px" bg="green.200" key="5">
        5
      </Box>,
      <Box h="50px" bg="orange.300" key="6">
        6
      </Box>,
    ],
  },

  argTypes: {
    spacing: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],

      control: {
        type: 'select',
      },
    },

    spacingY: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],

      control: {
        type: 'select',
      },
    },

    spacingX: {
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

type StoryType = StoryObj<typeof SimpleGridComponent>;
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
    minChildWidth: '200px',
  },
};
