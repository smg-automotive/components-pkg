import { MagnifierIcon } from '../icons';

import { Template } from './index.stories';

import Input from './index';

export default {
  title: 'Components/Forms/Input/Icon',
  component: Input,

  parameters: {
    controls: {
      sort: 'alpha',
      expanded: true,
    },
  },
};

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    size: 'lg',
    placeholder: 'Placeholder',
    icon: MagnifierIcon,
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
