import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';

import { FullHeight } from './index';

const meta: Meta<typeof FullHeight> = {
  title: 'Layout/Full Height',
  component: FullHeight,

  parameters: {
    layout: 'fullscreen',
  },

  args: {
    children: (
      <Box backgroundColor="brand.primary" minHeight="screen-height">
        I am full height container
      </Box>
    ),
  },

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof FullHeight> = {};
