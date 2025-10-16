import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import TimePickerComponent, { TimePickerProps } from './index';

const timeToDateString = (timeStr: string): string => {
  const [hours, minutes] = timeStr.split(':').map(Number);

  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  return date.toString();
};

const dateToTimeString = (dateStr: string): string => {
  const date = new Date(Date.parse(dateStr));

  return date.toLocaleTimeString('default', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const Template = (props: TimePickerProps) => {
  const [args, updateArgs] = useArgs<TimePickerProps>();

  return (
    <TimePickerComponent
      {...{
        ...props,
        ...args,
        value: dateToTimeString(args.value || ''),
      }}
      onChange={(e) => {
        args.onChange?.(e);
        updateArgs({ value: timeToDateString(e.target.value) });
      }}
    />
  );
};

const meta: Meta<typeof TimePickerComponent> = {
  title: 'Components/Forms/Time Picker',
  component: TimePickerComponent,
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
    value: '',
    isInvalid: false,
  },

  argTypes: {
    value: {
      control: 'date',
      description: 'Storybook does not support time input only, without date',
    },
    size: {
      control: 'select',
      options: ['md', 'lg'],
    },
    isInvalid: {
      control: 'boolean',
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof TimePickerComponent> = {};
