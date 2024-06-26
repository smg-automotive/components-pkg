import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { TooltipIcon } from '../icons';

import PopoverComponent from './index';

const meta: Meta<typeof PopoverComponent> = {
  title: 'Components/Overlay/Popover',
  component: PopoverComponent,

  args: {
    content: 'I am popover content',
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
  },
};

export default meta;

export const Overview: StoryObj<typeof PopoverComponent> = {};
