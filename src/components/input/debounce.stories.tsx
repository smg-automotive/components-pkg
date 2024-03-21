import { action } from '@storybook/addon-actions';

import { Template } from './index.stories';

import Input from './index';

export default {
  title: 'Components/Forms/Input/Debounced',
  component: Input,

  parameters: {
    controls: {
      sort: 'alpha',
      expanded: true,
    },

    actions: ['setInputvalue'],
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
    debounce: true,
    setInputValue: action('setInputvalue'),
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
