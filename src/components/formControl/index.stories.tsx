import React from 'react';
import { Meta } from '@storybook/react';
import { Box } from '@chakra-ui/react';

import { Input } from 'src/index';

import FormControl, { type Props } from './index';

const Template = (args: Props) => {
  return (
    <FormControl {...args}>
      <Input name={args.id} placeholder="placeholder" />
    </FormControl>
  );
};

const meta: Meta<typeof FormControl> = {
  title: 'Components/Forms/Form Control',
  component: FormControl,

  decorators: [
    (Story) => (
      <Box w="100%" maxW="250px">
        <Story />
      </Box>
    ),
  ],

  args: {
    label: 'Label',
    hint: 'I am a hint text',
    tooltip: '',
    isDisabled: false,
    isRequired: false,
    errorMessage: '',
    size: 'lg',
    id: 'test-input',
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

  args: {
    label: 'Label',
    disabled: true,
  },
};

export const Invalid = {
  render: Template.bind({}),

  args: {
    label: 'Label',
    errorMessage: 'Error message',
  },
};

export default meta;
