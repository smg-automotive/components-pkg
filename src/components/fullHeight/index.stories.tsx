import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';

import FullHeightComponent from './index';

const meta: Meta<typeof FullHeightComponent> = {
  title: 'Layout/Full Height',
  component: FullHeightComponent,

  parameters: {
    layout: 'fullscreen',
  },

  args: {
    children: (
      <Box backgroundColor="brand.primary" minHeight="100vh">
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

export const Overview: StoryObj<typeof FullHeightComponent> = {};
