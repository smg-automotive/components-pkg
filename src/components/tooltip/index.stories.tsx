import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { sizes } from 'src/themes/shared/tokens/sizes';

import { TooltipIcon } from '../icons';

import TooltipComponent from './index';

const meta: Meta<typeof TooltipComponent> = {
  title: 'Components/Overlay/Tooltip',
  component: TooltipComponent,

  args: {
    label: 'I am a tooltip text',
    placement: 'right',
    maxWidth: '6xl',
    children: <TooltipIcon />,
  },

  argTypes: {
    placement: {
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-start',
        'top-end',
        'right-start',
        'right-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
      ],
      control: 'select',
    },
    maxWidth: {
      options: Object.keys(sizes),
      control: {
        type: 'select',
      },
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
