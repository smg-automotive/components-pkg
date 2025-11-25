import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@chakra-ui/react';

import { Checkbox } from 'src/index';

import FormControlSection from './index';

const ThreeCheckboxes: React.FC = () => {
  const [values, setValues] = useState({
    one: false,
    two: false,
    three: false,
  });

  return (
    <Stack spacing="2">
      <Checkbox
        name="test-checkbox-1"
        label="Checkbox 1"
        isChecked={values.one}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValues((v) => ({ ...v, one: e.target.checked }))
        }
      />
      <Checkbox
        name="test-checkbox-2"
        label="Checkbox 2"
        isChecked={values.two}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValues((v) => ({ ...v, two: e.target.checked }))
        }
      />
      <Checkbox
        name="test-checkbox-3"
        label="Checkbox 3"
        isChecked={values.three}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValues((v) => ({ ...v, three: e.target.checked }))
        }
      />
    </Stack>
  );
};

/**
 * Form Control Section is the wrapper that provides context and functionality for all children.
 * Here we take the checkbox as children for visualitation. In case you need to explore the children properties,
 * search for the corresponding component.
 **/

const meta: Meta<typeof FormControlSection> = {
  title: 'Components/Forms/Form Control Section',
  component: FormControlSection,

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
    errorMessage: '',
    id: 'test-input',
    children: <ThreeCheckboxes />,
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
