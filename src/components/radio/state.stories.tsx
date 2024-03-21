import { Template } from './index.stories';

import Radio from './index';

export default {
  title: 'Components/Forms/Radio/States',
  component: Radio,
};

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    isDisabled: false,
    isInvalid: false,
    size: 'md',
  },

  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: 'select',
    },

    isDisabled: {
      table: {
        disable: true,
      },
    },

    isInvalid: {
      table: {
        disable: true,
      },
    },
  },
};

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    isDisabled: true,
    isInvalid: false,
    size: 'md',
  },

  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: 'select',
    },

    isDisabled: {
      table: {
        disable: true,
      },
    },

    isInvalid: {
      table: {
        disable: true,
      },
    },
  },
};

export const Error = {
  render: Template.bind({}),
  name: 'Error',

  args: {
    isDisabled: false,
    isInvalid: true,
    size: 'md',
  },

  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: 'select',
    },

    isDisabled: {
      table: {
        disable: true,
      },
    },

    isInvalid: {
      table: {
        disable: true,
      },
    },
  },
};
