import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { TooltipIcon } from '../icons';

import TooltipComponent from './index';

const meta: Meta<typeof TooltipComponent> = {
  title: 'Components/Overlay/Tooltip',
  component: TooltipComponent,

  args: {
    label: 'I am a tooltip text',
    placement: 'auto',
    children: <TooltipIcon />,
  },

  argTypes: {
    placement: {
      options: [
        'auto',
        'auto-start',
        'auto-end',
        'top',
        'bottom',
        'right',
        'left',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
      ],

      control: 'select',
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof TooltipComponent> = {};
