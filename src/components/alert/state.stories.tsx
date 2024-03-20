import Alert from './index.tsx';
import { Template } from './index.stories.tsx';

export default {
  title: 'Components/Feedback/Alert/States',
  component: Alert,
};

export const Info = {
  render: Template.bind({}),
  name: 'Info',

  args: {
    type: 'info',
  },
};

export const Success = {
  render: Template.bind({}),
  name: 'Success',

  args: {
    type: 'success',
  },
};

export const Warning = {
  render: Template.bind({}),
  name: 'Warning',

  args: {
    type: 'warning',
  },
};

export const Error = {
  render: Template.bind({}),
  name: 'Error',

  args: {
    type: 'error',
  },
};
