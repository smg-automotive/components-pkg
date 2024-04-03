import React from 'react';
import { Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { action } from '@storybook/addon-actions';

import { Box } from '../index';

import SelectComponent, { Props } from './index';

const Template = (props: Props) => {
  const [args, updateArgs] = useArgs<Props>();
  return (
    <SelectComponent
      {...({
        ...props,
        ...args,
      } as Props)}
      onChange={(e) => {
        updateArgs({ value: e.target.value });
        args.onChange && args.onChange(e);
      }}
    />
  );
};

const meta: Meta<typeof SelectComponent> = {
  title: 'Components/Forms/Select',
  component: SelectComponent,
  decorators: [
    (Story) => (
      <Box w="100%" maxW="250px">
        <Story />
      </Box>
    ),
  ],
  render: Template.bind({}),

  args: {
    placeholder: 'Select an option',
    isDisabled: false,
    isInvalid: false,
    size: 'lg',
    onChange: action('onChange'),
    onFocus: action('onFocus'),
    onBlur: action('onBlur'),
    autoFocus: false,
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

    value: undefined,
  },

  argTypes: {
    value: {
      description: 'use value prop when you want controlled select',
      control: 'text',
    },

    size: {
      options: ['md', 'lg'],
      control: 'select',
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

export const Select = {};

export const StateFocused = {
  name: 'State > Focused',

  args: {
    autoFocus: true,
  },
};

export const StateInvalid = {
  name: 'State > Invalid',
  args: {
    isInvalid: true,
  },
};

export const StateDisabled = {
  name: 'State > Disabled',

  args: {
    isDisabled: true,
  },
};

export const SizeMedium = {
  name: 'Size > Medium',
  args: {
    size: 'md',
  },
};

export const SizeLarge = {
  name: 'Size > Large',
  args: {
    size: 'lg',
  },
};
