import { action } from '@storybook/addon-actions';

import { ErrorIcon } from '../index';
import Alert, { type AlertProps } from './index';

export const Template = ({ onDismiss, dismissible, ...args }: Exclude<Alert ) => (
  <Alert
    description="Your Chakra experience may be degraded."
    dismissible={dismissible}
    onDismiss={dismissible && onDismiss ? action('onDismiss') : undefined}
    {...args}
  />
);

export default {
  title: 'Components/Feedback/Alert',
  component: Alert,

  args: {
    type: 'info',
    dismissible: false,
    onDismiss: false,
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
      control: 'boolean',
    },
  },
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',

  args: {
    type: 'info',
    dismissible: false,
  },
};

export const WithLink = {
  render: Template.bind({}),
  name: 'With Link',

  args: {
    type: 'info',

    link: {
      url: 'https://www.autoscout24.ch/de',
      text: 'Link',
    },
  },
};

export const WithTitle = {
  render: Template.bind({}),
  name: 'With Title',

  args: {
    type: 'info',
    title: 'Your browser is outdated!',
  },
};

export const WithCustomIcon = {
  render: Template.bind({}),
  name: 'With custom Icon',

  args: {
    type: 'error',
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
  name: 'Dismissible',

  args: {
    type: 'info',
    dismissible: true,
    onDismiss: true,
  },
};
