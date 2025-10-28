import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import { RangeFilterInput } from './index';

const meta = {
  title: 'Components/Filter/Range Input',
  component: RangeFilterInput,
  decorators: [
    (Story) => (
      <Box style={{ maxWidth: 270 }}>
        <Story />
      </Box>
    ),
  ],
  args: {
    unit: 'CHF',
    from: {
      name: 'priceFrom',
      placeholder: 'From',
    },
    to: {
      name: 'priceTo',
      placeholder: 'To',
    },
    handleChange: action('handleChange'),
    onBlur: action('onBlur'),
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof RangeFilterInput>;

export default meta;

type StoryType = StoryObj<typeof RangeFilterInput>;

export const Default: StoryType = {
  name: 'Range Filter Input',
};

export const WithInitialValue: StoryType = {
  name: 'With initial value',
  args: {
    from: {
      name: 'priceFrom',
      placeholder: 'From',
      value: 100,
    },
    to: {
      name: 'priceTo',
      placeholder: 'To',
      value: 200,
    },
  },
};

export const WithoutUnit: StoryType = {
  name: 'Without unit',
  args: {
    unit: undefined,
  },
};
