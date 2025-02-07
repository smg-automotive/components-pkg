import { Meta, StoryObj } from '@storybook/react';

import { emBreakpoints } from 'src/themes/shared/breakpoints';

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

export const HideElement: StoryObj<typeof Box> = {
  name: 'Show/Hide element',

  args: {
    hideBelow: 'sm',
    hideFrom: 'xl',
  },

  argTypes: {
    hideBelow: {
      options: [...Object.keys(emBreakpoints)],
      control: {
        type: 'select',
      },
    },
    hideFrom: {
      options: [...Object.keys(emBreakpoints)],
      control: {
        type: 'select',
      },
    },
  },
};
