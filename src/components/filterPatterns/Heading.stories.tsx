import React from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Box } from 'src/index';

import { FilterHeading } from './Heading';

const meta: Meta<typeof FilterHeading> = {
  title: 'Patterns/Filter/Heading',
  component: FilterHeading,
  decorators: [
    (Story) => (
      <Box
        width="300px"
        p="sm"
        border="1px"
        borderColor="gray.300"
        rounded="sm"
        boxShadow="sm"
      >
        <Story />
      </Box>
    ),
  ],

  parameters: {
    layout: 'centered',
  },

  args: {
    language: 'de',
    onClose: action('onClose'),
    onResetFilter: action('onResetFilter'),
    label: 'Treibstoff',
  },

  argTypes: {
    language: {
      options: ['de', 'fr', 'it', 'en'],
      control: 'select',
    },

    contentRef: {
      table: {
        disable: true,
      },
    },
  },
};

export const WithCloseButton = {
  name: 'With close button',
};

export const WithoutCloseButton = {
  name: 'Without close button',

  args: {
    onClose: undefined,
  },
};

export const Applied = {
  args: {
    numberOfAppliedFilters: 5,
    isApplied: true,
  },
};

export default meta;
