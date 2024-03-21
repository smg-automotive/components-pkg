import { Template } from './index.stories';

import Radio from './index';

export default {
  title: 'Components/Forms/Radio/Sizes',
  component: Radio,
};

export const Medium = {
  render: Template.bind({}),
  name: 'Medium',

  args: {
    isDisabled: false,
    isInvalid: false,
    size: 'md',
  },

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
};

export const Small = {
  render: Template.bind({}),
  name: 'Small',

  args: {
    isDisabled: false,
    isInvalid: false,
    size: 'sm',
  },

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
};
