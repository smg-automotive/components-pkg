import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import { Input } from 'src/index';

import FormControl from './index';

/**
 * Form Control is the wrapper that provides context and functionality for all children.
 * Here we take the input as children for visualitation. In case you need to explore the children properties,
 * search for the corresponding component.
 **/

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
    children: <Input name="test-input" placeholder="placeholder" />,
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
export default meta;

type StoryType = StoryObj<typeof FormControl>;
export const Overview: StoryType = {};

export const WithLabel: StoryType = {
  name: 'With label',

  args: {
    label: 'Label',
    hint: '',
  },
};

export const Required: StoryType = {
  args: {
    label: 'Label',
    hint: '',
    isRequired: true,
  },
};

export const WithHint: StoryType = {
  name: 'With hint',

  args: {
    label: 'Label',
    hint: 'Hint text',
  },
};

export const WithTooltip: StoryType = {
  name: 'With tooltip',

  args: {
    label: 'Label',
    hint: '',
    tooltip: 'I am a tooltip text',
  },
};

export const WithButton: StoryType = {
  name: 'With button',

  args: {
    label: 'Label',
    labelButtonText: 'button',
    labelButtonOnClick: action('label button clicked'),
  },
};

export const WithTooltipAndButton: StoryType = {
  name: 'With tooltip and button',

  args: {
    label: 'Label',
    tooltip: 'I am a tooltip text',
    labelButtonText: 'button',
    labelButtonOnClick: action('label button clicked'),
  },
};

export const Invalid: StoryType = {
  args: {
    label: 'Label',
    errorMessage: 'Error message',
  },
};
