import { Template } from './index.stories';

import Input from './index';

export default {
  title: 'Components/Forms/Input/Clearable',
  component: Input,

  parameters: {
    controls: {
      sort: 'alpha',
      expanded: true,
    },
  },
};

export const Uncontrolled = {
  render: Template.bind({}),
  name: 'Uncontrolled',

  args: {
    size: 'lg',
    placeholder: 'Placeholder',
    isClearable: true,
    value: undefined,
    onChange: true,
  },

  argTypes: {
    size: {
      options: ['md', 'lg'],
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

    autoFocus: {
      table: {
        disable: true,
      },
    },
  },
};

export const Controlled = {
  render: Template.bind({}),
  name: 'Controlled',

  args: {
    size: 'lg',
    placeholder: 'Placeholder',
    isClearable: true,
    value: '',
  },

  argTypes: {
    size: {
      options: ['md', 'lg'],
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

    autoFocus: {
      table: {
        disable: true,
      },
    },
  },
};
