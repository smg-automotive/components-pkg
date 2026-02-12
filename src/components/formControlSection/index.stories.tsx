import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';

import { Textarea } from '../textarea';

import { FormControlSection } from './index';

/**
 * Form Control Section is the wrapper that provides context and functionality for all children.
 * Here we take the textarea as children for visualitation. In case you need to explore the children properties,
 * search for the corresponding component.
 **/

const meta: Meta<typeof FormControlSection> = {
  title: 'Components/Forms/Form Control Section',
  component: FormControlSection,

  decorators: [
    (Story) => (
      <Box w="full">
        <Story />
      </Box>
    ),
  ],

  args: {
    label: 'Label',
    hint: 'I am a hint text',
    tooltip: '',
    errorMessage: '',
    id: 'test-input',
    children: <Textarea name="test-textarea" />,
  },
};
export default meta;

type StoryType = StoryObj<typeof FormControlSection>;
export const Overview: StoryType = {};

export const WithLabel: StoryType = {
  name: 'With label',

  args: {
    label: 'Label',
    hint: '',
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

export const Invalid: StoryType = {
  args: {
    label: 'Label',
    errorMessage: 'Error message',
  },
};
