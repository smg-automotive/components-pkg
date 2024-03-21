import { Template } from './index.stories';

import Input from './index';

export default {
  title: 'Components/Forms/Input/Sizes',
  component: Input,

  parameters: {
    controls: {
      sort: 'alpha',
      expanded: true,
    },

    actions: ['change', 'blur', 'focus'],
  },
};

export const Medium = {
  render: Template.bind({}),
  name: 'Medium',

  args: {
    size: 'md',
    placeholder: 'Placeholder',
    isDisabled: false,
    isInvalid: false,
    autoFocus: false,
  },

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
};

export const Large = {
  render: Template.bind({}),
  name: 'Large',

  args: {
    size: 'lg',
    placeholder: 'Placeholder',
    isDisabled: false,
    isInvalid: false,
    autoFocus: false,
  },

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
};
