import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import DatePickerComponent, { DatePickerProps } from './index';

const Template = (props: DatePickerProps) => {
  const [args, updateArgs] = useArgs<DatePickerProps>();

  return (
    <DatePickerComponent
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

const meta: Meta<typeof DatePickerComponent> = {
  title: 'Components/Forms/Date Picker',
  component: DatePickerComponent,
  render: Template.bind({}),

  decorators: [
    (Story) => (
      <Box w="100%" maxW="250px">
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
    isInvalid: false,
  },

  argTypes: {
    min: {
      control: 'date',
      description:
        "Disregard the time input in the control - storybook doesn't support a lone date input",
    },
    value: {
      control: 'date',
      description:
        "Disregard the time input in the control - storybook doesn't support a lone date input",
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof DatePickerComponent> = {};
