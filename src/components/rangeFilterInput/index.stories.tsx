import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Box } from '@chakra-ui/react';

import RangeFilterInputComponent from './index';

const meta: Meta<typeof RangeFilterInputComponent> = {
  title: 'Components/Filter/Range Input',
  component: RangeFilterInputComponent,

  decorators: [
    (Story) => (
      <Box maxW={270}>
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
    isDisabled: {
      control: 'boolean',
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof RangeFilterInputComponent>;
export const RangeFilterInput: StoryType = {};

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
