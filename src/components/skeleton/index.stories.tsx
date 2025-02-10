import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../box';

import { Skeleton } from './index';


const meta: Meta<typeof Skeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,

  args: {
    children: 'box',
    loading: true,
  },

  argTypes: {
    children: {
      mapping: {
        box:
          <Box height="2xl" width="container.sm">
            Dummy content
          </Box>
        },
      table: {
        disable: true,
      },
    },
    loading: {
      control: 'boolean',
    }
  },
};
export default meta;

export const Overview: StoryObj<typeof Skeleton> = {};
