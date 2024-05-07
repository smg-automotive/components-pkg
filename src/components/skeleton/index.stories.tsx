import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../index';

import SkeletonComponent from './index';

const meta: Meta<typeof SkeletonComponent> = {
  title: 'Components/Feedback/Skeleton',
  component: SkeletonComponent,

  args: {
    children: (
      <Box height="80px" width="500px">
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

export const Overview: StoryObj<typeof SkeletonComponent> = {};
