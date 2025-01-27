import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from 'src';

import { Skeleton } from './index';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,

  args: {
    children: (
      <Box height="2xl" width="container.sm">
        Dummy content
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

export const Overview: StoryObj<typeof Skeleton> = {};
