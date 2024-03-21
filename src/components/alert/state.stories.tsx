import { Template } from './Template';

import Alert from './index';

export default {
  title: 'Components/Feedback/Alert/States',
  component: Alert,

  args: {
    description: 'Your Chakra experience may be degraded.',
  },

  argTypes: {
    description: {
      table: { disable: true },
    },
  },
};

export const Info = {
  render: Template.bind({}),

  args: {
    type: 'info',
  },
};

export const Success = {
  render: Template.bind({}),

  args: {
    type: 'success',
  },
};

export const Warning = {
  render: Template.bind({}),

  args: {
    type: 'warning',
  },
};

export const Error = {
  render: Template.bind({}),

  args: {
    type: 'error',
  },
};
