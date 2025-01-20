import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ErrorIcon } from '../index';

import Alert from './index';

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,

  args: {
    type: 'info',
    description: 'Your Chakra experience may be degraded.',
    dismissible: false,
    title: '',
    link: undefined,
  },

  argTypes: {
    type: {
      options: ['error', 'warning', 'info', 'success'],
      control: 'select',
    },
    dismissible: {
      control: 'boolean',
    },
    onDismiss: {
      description: 'Callback when the alert is dismissed',
      control: {},
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof Alert>;
export const Overview: StoryType = {};

export const WithLink: StoryType = {
  args: {
    link: {
      url: '#href',
      text: 'Link',
    },
  },
};

export const WithLinkOnClick: StoryType = {
  name: 'With Link > onClick event',
  args: {
    link: {
      as: 'button',
      text: 'Link',
      onClick: action('onClick'),
    },
  },
};

export const WithTitle: StoryType = {
  args: {
    title: 'Your browser is outdated!',
  },
};

export const WithCustomIcon: StoryType = {
  args: {
    type: 'error',
    dismissible: false,
    title: 'Your browser is outdated!',
    link: {
      url: '#href',
      text: 'Link',
    },
    icon: <ErrorIcon />,
  },

  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
};

export const Dismissible: StoryType = {
  args: {
    type: 'info',
    dismissible: true,
    onDismiss: action('onDismiss'),
  },
};

export const TypeInfo: StoryType = {
  name: 'Type > Info',
  args: {
    type: 'info',
  },
};

export const TypeSuccess: StoryType = {
  name: 'Type > Success',
  args: {
    type: 'success',
  },
};

export const TypeWarning: StoryType = {
  name: 'Type > Warning',
  args: {
    type: 'warning',
  },
};

export const TypeErrorStory: StoryType = {
  name: 'Type > Error',
  args: {
    type: 'error',
  },
};
