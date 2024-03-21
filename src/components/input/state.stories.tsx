import { Template } from './index.stories';

import Input from './index';

export default {
  title: 'Components/Forms/Input/States',
  component: Input,

  parameters: {
    controls: {
      sort: 'alpha',
      expanded: true,
    },

    actions: ['change', 'blur', 'focus'],
  },
};

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    size: 'lg',
    placeholder: 'Placeholder',
    isDisabled: false,
    isInvalid: false,
    autoFocus: false,
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

export const Focused = {
  render: Template.bind({}),
  name: 'Focused',

  args: {
    size: 'lg',
    placeholder: 'Placeholder',
    isDisabled: false,
    isInvalid: false,
    autoFocus: true,
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

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    size: 'lg',
    placeholder: 'Placeholder',
    isDisabled: true,
    isInvalid: false,
    autoFocus: false,
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

export const Invalid = {
  render: Template.bind({}),
  name: 'Invalid',

  args: {
    size: 'lg',
    placeholder: 'Placeholder',
    isDisabled: false,
    isInvalid: true,
    autoFocus: false,
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
