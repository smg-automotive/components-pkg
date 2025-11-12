import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { TopToast } from 'src/hooks/useToast/TopToaster';
import { TopRightToast } from 'src/hooks/useToast/TopRightToast';
import { Button, ErrorIcon } from 'src/components';

import { ToastOptions, useToast } from './index';

const Template = (args: ToastOptions) => {
  const toast = useToast();

  return (
    <>
      <Button onClick={() => toast(args)}>Show Toast</Button>
      <TopRightToast />
      <TopToast />
    </>
  );
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
      options: ['top', 'top-right'],
      control: 'select',
    },

    icon: {
      control: 'none',
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof useToast> = {};
