import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Box from '../box';

import AspectRatioComponent from './index';

const meta: Meta<typeof AspectRatioComponent> = {
  title: 'Layout/Aspect ratio',
  component: AspectRatioComponent,
  args: {
    children: <Box backgroundColor="red.500">I am in the box with a ratio</Box>,
  },
};
export default meta;

export const Overview: StoryObj<typeof AspectRatioComponent> = {
  args: {
    width: 300,
    ratio: 4 / 3,
  },
};
