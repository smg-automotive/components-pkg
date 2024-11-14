import { Meta, StoryObj } from '@storybook/react';

import { sharedConfig } from 'src/themes/shared/index';

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
    padding: {
      control: { type: 'select' },
      options: Object.keys(sharedConfig.theme.tokens.spacing),
    },
    border: {
      control: { type: 'select' },
      options: Object.keys(sharedConfig.theme.tokens.borders),
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof Box> = {};
