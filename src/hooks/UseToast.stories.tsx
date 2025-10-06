import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, ErrorIcon } from '../index';
import useToast, { ToastOptions } from './UseToast';

const Template = (args: ToastOptions) => {
  const toast = useToast();
  return <Button onClick={() => toast(args)}>Show Toast</Button>;
};

const meta: Meta<typeof useToast> = {
  title: 'Components/Feedback/Toast',
  component: Template,

  args: {
    type: 'error',
    title: 'Your browser is outdated!',
    description: 'Your experience may be degraded.',
    icon: <ErrorIcon />,
    duration: 5000,
  },

  argTypes: {
    type: {
      options: ['error', 'warning', 'info', 'success'],
      control: 'select',
    },

    position: {
      options: [
        'bottom',
        'top',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ],
      control: 'select',
    },

    icon: {
      control: 'none',
    },

    duration: {
      options: [2000, 5000, 10000, 'infinite'],
      control: { type: 'select' },
      mapping: {
        infinite: null,
        2000: 2000,
        5000: 5000,
        10000: 10000,
      },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof useToast> = {};
