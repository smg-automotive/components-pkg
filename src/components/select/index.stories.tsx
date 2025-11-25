import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import { Box } from '../index';

import { Select as SelectComponent, SelectProps } from './index';

const Template = (props: SelectProps) => {
  const [args, updateArgs] = useArgs<SelectProps>();
  return (
    <SelectComponent
      {...({
        ...props,
        ...args,
      } as SelectProps)}
      onChange={(e) => {
        updateArgs({ value: e.target.value });
        args.onChange?.(e);
      }}
    />
  );
};

const meta: Meta<typeof SelectComponent> = {
  title: 'Components/Forms/Select',
  component: SelectComponent,
  decorators: [
    (Story) => (
      <Box w="full" maxW="5xl">
        <Story />
      </Box>
    ),
  ],
  render: Template.bind({}),

  args: {
    name: 'test-select',
    options: [
      {
        value: 1,
        label: 'Option 1',
      },
      {
        value: 2,
        label: 'Option 2',
      },
      {
        value: 3,
        label: 'Option 3',
      },
      {
        value: 4,
        label: 'Option 4',
      },
      {
        value: 5,
        label: 'Option 5',
      },
      {
        value: 6,
        label: 'Option 6',
      },
    ],
    autoFocus: false,
    disabled: false,
    invalid: false,
    onBlur: action('onBlur'),
    onChange: action('onChange'),
    onFocus: action('onFocus'),
    placeholder: 'Select an option',
    size: 'lg',
    value: undefined,
  },

  argTypes: {
    options: {
      table: {
        type: { summary: 'Option<string>[] | Option<number>[]' },
        required: true,
      },
    },

    value: {
      description: 'use value prop when you want controlled select',
      control: 'text',
      table: {
        type: { summary: 'string | number' },
      },
    },

    size: {
      options: ['md', 'lg'],
      control: 'select',
      table: {
        type: { summary: 'md | lg' },
        defaultValue: { summary: 'lg' },
      },
    },
  },

  parameters: {
    controls: {
      sort: 'alpha',
      expanded: true,
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof SelectComponent>;
export const Overview: StoryType = {};

export const StateFocused: StoryType = {
  name: 'State > Focused',

  args: {
    autoFocus: true,
  },
};

export const StateInvalid: StoryType = {
  name: 'State > Invalid',
  args: {
    invalid: true,
  },
};

export const StateDisabled: StoryType = {
  name: 'State > Disabled',

  args: {
    disabled: true,
  },
};

export const SizeMedium: StoryType = {
  name: 'Size > Medium',
  args: {
    size: 'md',
  },
};

export const SizeLarge: StoryType = {
  name: 'Size > Large',
  args: {
    size: 'lg',
  },
};
