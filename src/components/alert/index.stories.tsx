import React from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ErrorIcon } from '../index';
import { Template } from './Template';

import Alert from './index';

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,

  args: {
    type: 'info',
    description: 'Your Chakra experience may be degraded.',
    dismissible: true,
    onDismiss: action('onDismiss'),
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
      control: { type: null },
    },
  },
};

export const Overview = {
  render: Template.bind({}),

  args: {
    type: 'info',
    dismissible: false,
  },
};

export const WithLink = {
  render: Template.bind({}),

  args: {
    type: 'info',
    dismissible: false,
    link: {
      url: 'https://www.autoscout24.ch/de',
      text: 'Link',
    },
  },
};

export const WithTitle = {
  render: Template.bind({}),

  args: {
    type: 'info',
    dismissible: false,
    title: 'Your browser is outdated!',
  },
};

export const WithCustomIcon = {
  render: Template.bind({}),
  name: 'With custom Icon',

  args: {
    type: 'error',
    dismissible: false,
    title: 'Your browser is outdated!',
    link: {
      url: 'https://www.autoscout24.ch/de',
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

export const Dismissible = {
  render: Template.bind({}),
  args: {
    type: 'info',
    dismissible: true,
  },
};

export default meta;
