import React from 'react';

import Box from '../box';

import AspectRatioComponent from './index';

const Template = (args) => (
  <AspectRatioComponent {...args}>
    <Box backgroundColor="red.500">I am in the box with a ratio</Box>
  </AspectRatioComponent>
);

export default {
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
