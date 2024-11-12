import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import { Button, Select } from '../index';
import { MagnifierIcon } from '../icons';

import InputComponent, { InputProps } from './index';

const Wrapper = ({ value: argValue, onChange, ...props }: InputProps) => {
  const [{ value }, updateArgs] = useArgs();
  return (
    <InputComponent
      {...({
        ...props,
        ...(argValue || argValue === '' || argValue === 0
          ? {
              value,
              onChange: (e) => {
                updateArgs({ value: e.target.value });
                onChange?.(e);
              },
            }
          : { onChange }),
      } as InputProps)}
    />
  );
};

const meta: Meta<typeof InputComponent> = {
  title: 'Components/Forms/Input',
  component: InputComponent,

  args: {
    placeholder: 'Placeholder',
    isDisabled: false,
    isInvalid: false,
    size: 'lg',
    onChange: action('onChange'),
    onFocus: action('onFocus'),
    onBlur: action('onBlur'),
    autoFocus: false,
    value: '',
    type: 'text',
    isClearable: false,
    name: 'test-input',
    debounce: false,
    icon: undefined,
  },

  argTypes: {
    size: { control: 'select' },

    value: {
      control: { type: 'text' },
      description: 'use value prop when you want controlled input',
    },

    type: {
      control: 'select',
    },

    setInputValue: {
      description: 'used to set value for debounced input',
      control: {},
    },

    onBlur: {
      control: {},
    },

    onFocus: {
      control: {},
    },

    onChange: {
      control: {},
    },
  },

  decorators: (Story) => (
    <Box w="100%" maxW="550px">
      <Story />
    </Box>
  ),

  parameters: {
    docs: {
      controls: {
        sort: 'alpha',
      },
    },
  },

  render: Wrapper,
};
export default meta;

type StoryType = StoryObj<typeof InputComponent>;
export const Overview: StoryType = {};

export const StateFocused: StoryType = {
  name: 'States > Focused',
  args: {
    size: 'lg',
    placeholder: 'I am focused',
    isDisabled: false,
    isInvalid: false,
    autoFocus: true,
  },
};

export const StateDisabled: StoryType = {
  name: 'States > Disabled',
  args: {
    size: 'lg',
    placeholder: 'I am disabled',
    isDisabled: true,
    isInvalid: false,
    autoFocus: false,
  },
};

export const StateInvalid: StoryType = {
  name: 'States > Invalid',
  args: {
    size: 'lg',
    placeholder: 'I am invalid',
    isDisabled: false,
    isInvalid: true,
    autoFocus: false,
  },
};

export const SizeMedium: StoryType = {
  name: 'Sizes > Medium',
  args: {
    size: 'md',
  },
};

export const SizeLarge: StoryType = {
  name: 'Sizes > Large',
  args: {
    size: 'lg',
  },
};

export const ClearableNotControlled: StoryType = {
  name: 'Clearable > Not controlled',
  args: {
    isClearable: true,
    value: undefined,
    placeholder: 'I am clearable',
  },
};

export const ClearableControlled: StoryType = {
  name: 'Clearable > Controlled',
  args: {
    isClearable: true,
    value: '',
    placeholder: 'I am clearable',
  },
};

/**
 * This is a debounced input, head to the actions tab and see that `setInputValue` is not fired on every key stroke
 */
export const Debounced: StoryType = {
  args: {
    size: 'lg',
    placeholder: 'Placeholder',
    isDisabled: false,
    isInvalid: false,
    autoFocus: false,
    debounce: true,
    setInputValue: action('setInputValue'),
  },
};

export const WithIcon: StoryType = {
  args: {
    icon: MagnifierIcon,
    autoFocus: true,
  },
};

export const WithRightAddonElementButton: StoryType = {
  args: {
    ...WithIcon.args,
    rightAddonElement: (
      <Button
        borderColor="gray.400"
        borderLeftRadius="0"
        onClick={() => {}}
        variant="secondary"
      >
        Test
      </Button>
    ),
  },
};

export const WithRightAddonElementSelect: StoryType = {
  args: {
    ...WithIcon.args,
    rightAddonElement: (
      <Select
        name="Test select"
        options={[{ label: '+10 km', value: '10' }]}
        borderLeftRadius="0"
      />
    ),
  },
};

export const WithLeftAddonElementButton: StoryType = {
  args: {
    ...WithIcon.args,
    leftAddonElement: (
      <Button
        borderColor="gray.400"
        borderRightRadius="0"
        onClick={() => {}}
        variant="secondary"
      >
        Test
      </Button>
    ),
  },
};

export const WithLeftAddonElementSelect: StoryType = {
  args: {
    type: 'number',
    placeholder: 'i.e. 791234567',
    leftAddonElement: (
      <Box width={96}>
        <Select
          name="Test select"
          options={[{ label: '+41', value: 'CH' }]}
          borderRightRadius="0"
        />
      </Box>
    ),
  },
};
