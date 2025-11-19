import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import { DatePicker, DatePickerProps } from './index';

const Template = (props: DatePickerProps) => {
  const [args, updateArgs] = useArgs<DatePickerProps>();

  return (
    <DatePicker
      {...{
        ...props,
        ...args,
      }}
      onChange={(e) => {
        args.onChange?.(e);
        updateArgs({ value: e.target.value });
      }}
    />
  );
};

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Forms/Date Picker',
  component: DatePicker,
  render: Template.bind({}),

  decorators: [
    (Story) => (
      <Box w="full" maxW="5xl">
        <Story />
      </Box>
    ),
  ],

  args: {
    onBlur: action('onBlur'),
    onChange: action('onChange'),
    onFocus: action('onFocus'),
    size: 'lg',
    min: new Date(),
    value: '',
    invalid: false,
  },

  argTypes: {
    min: {
      control: 'date',
      description:
        "Disregard the time input in the control - storybook doesn't support a lone date input",
    },
    size: {
      options: ['md', 'lg'],

      control: {
        type: 'select',
      },
    },
    value: {
      control: 'date',
      description:
        "Disregard the time input in the control - storybook doesn't support a lone date input",
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof DatePicker> = {};
