import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import { RangeSlider } from '@/src/components/rangeSlider';

const meta: Meta<typeof RangeSlider> = {
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
};

export default meta;

type StoryType = StoryObj<typeof RangeSlider>;

export const Overview: StoryType = {};
