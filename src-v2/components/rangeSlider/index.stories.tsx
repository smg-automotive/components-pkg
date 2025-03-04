import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Box from '../box';

import RangeSliderComponent from './';

const meta: Meta<typeof RangeSliderComponent> = {
  title: 'Components/Filter/Range Slider',
  component: RangeSliderComponent,

  decorators: [
    (Story) => (
      <Box maxW={340}>
        <Story />
      </Box>
    ),
  ],

  args: {
    onChange: action('onChange'),
    onChangeEnd: action('onChangeEnd'),
    min: 0,
    max: 10,
    defaultValue: [3, 5],
  },
};
export default meta;

export const Overview: StoryObj<typeof RangeSliderComponent> = {};
