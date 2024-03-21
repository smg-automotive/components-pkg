import { Box } from '@chakra-ui/react';

import { Input } from 'src/index';

import FormControl from './index';

const Template = (args) => {
  return (
    <Box w="100%" maxW="250px">
      <FormControl id="test-input" {...args}>
        <Input name="test-input" placeholder="placeholder" />
      </FormControl>
    </Box>
  );
};

export default {
  title: 'Components/Forms/Form Control',
  component: FormControl,

  args: {
    label: 'Label',
    hint: 'I am a hint text',
    tooltip: '',
    isDisabled: false,
    isRequired: false,
    errorMessage: '',
    size: 'lg',
  },

  argTypes: {
    size: {
      options: ['sm', 'lg'],
      control: 'select',
    },
  },

  parameters: {
    controls: {
      sort: 'alpha',
    },
  },
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',
};

export const WithLabel = {
  render: Template.bind({}),
  name: 'With label',

  args: {
    label: 'Label',
    hint: '',
  },
};

export const Required = {
  render: Template.bind({}),
  name: 'Required',

  args: {
    label: 'Label',
    hint: '',
    isRequired: true,
  },
};

export const WithHint = {
  render: Template.bind({}),
  name: 'With hint',

  args: {
    label: 'Label',
    hint: 'Hint text',
  },
};

export const WithTooltip = {
  render: Template.bind({}),
  name: 'With tooltip',

  args: {
    label: 'Label',
    hint: '',
    tooltip: 'I am a tooltip text',
  },
};

export const WithButton = {
  render: Template.bind({}),
  name: 'With button',

  args: {
    label: 'Label',
    labelButtonText: 'button',
  },
};

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    label: 'Label',
    disabled: true,
  },
};

export const Invalid = {
  render: Template.bind({}),
  name: 'Invalid',

  args: {
    label: 'Label',
    errorMessage: 'Error message',
  },
};
