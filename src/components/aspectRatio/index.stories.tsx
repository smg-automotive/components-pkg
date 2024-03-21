import React from 'react';
import { Meta } from '@storybook/react';

import Box from '../box';

import AspectRatioComponent, { type AspectRatioProps } from './index';

const Template = (args: AspectRatioProps) => (
  <AspectRatioComponent {...args}>
    <Box backgroundColor="red.500">I am in the box with a ratio</Box>
  </AspectRatioComponent>
);

const meta: Meta<typeof AspectRatioComponent> = {
  title: 'Layout/Aspect ratio',
  component: AspectRatioComponent,
};

export const AspectRatio = {
  render: Template.bind({}),
  name: 'Aspect ratio',

  args: {
    ratio: 4 / 3,
    width: 300,
  },
};

export default meta;
