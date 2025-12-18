import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import { RangeSlider } from './index';

const meta = {
  title: 'Components/Filter/Range Slider',
  component: RangeSlider,
  decorators: [
    (Story) => (
      <Box style={{ maxWidth: 340 }}>
        <Story />
      </Box>
    ),
  ],
  args: {
    defaultValue: [3, 5],
    min: 0,
    max: 10,
    onChange: action('onChange'),
    onChangeEnd: action('onChangeEnd'),
  },
} satisfies Meta<typeof RangeSlider>;

export default meta;

type StoryType = StoryObj<typeof RangeSlider>;

export const Overview: StoryType = {};
