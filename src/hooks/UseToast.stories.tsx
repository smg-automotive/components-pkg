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
  },
};
export default meta;

export const Overview: StoryObj<typeof useToast> = {};
