import { Meta, StoryObj } from '@storybook/react';

import { Box } from './index';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,

  parameters: {
    controls: {
      sort: 'alpha',
    },
  },

  args: {
    padding: '2xl',
    color: 'gray.500',
    border: '1px',
    borderColor: 'green.500',
    children: 'I am a box',
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

export const Overview: StoryObj<typeof Box> = {};
