import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from 'src';

import { AspectRatio } from './index';

const meta: Meta<typeof AspectRatio> = {
  title: 'Layout/Aspect Ratio',
  component: AspectRatio,

  args: {
    width: '6xl',
    ratio: 4 / 3,
    children: 'box',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
      mapping: {
        box: <Box bg="red.100">I have an aspect ratio</Box>,
      },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof AspectRatio> = {};
