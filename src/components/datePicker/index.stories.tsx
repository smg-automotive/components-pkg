import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import DatePickerComponent from './index';

const Container = ({ children }) => {
  return (
    <Box w="100%" maxW="250px">
      {children}
    </Box>
  );
};

const Template = ({ value, onChange, onBlur, onFocus, min, ...args }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const onChangeHandler = onChange
    ? action('change')
    : () => {
        return;
      };
  return (
    <Container>
      <DatePickerComponent
        {...args}
        min={min ? new Date(min) : null}
        onBlur={onBlur ? action('blur') : undefined}
        onFocus={onFocus ? action('focus') : undefined}
        onChange={(e) => {
          setCurrentValue(e.target.value);
          onChangeHandler(e);
        }}
        value={value ? currentValue : undefined}
        name="datepicker"
      />
    </Container>
  );
};

export default {
  title: 'Components/Forms/Date Picker',
  component: DatePickerComponent,

  parameters: {
    controls: {
      sort: 'alpha',
      expanded: true,
    },

    actions: ['change', 'blur', 'focus'],
  },

  args: {
    onChange: true,
    onBlur: true,
    onFocus: true,
  },

  argTypes: {
    min: {
      control: 'date',
    },
  },
};

export const DatePicker = {
  render: Template.bind({}),
  name: 'Date Picker',

  args: {
    size: 'lg',
    min: new Date(),
    value: '',
    isInvalid: false,
  },

  argTypes: {
    size: {
      options: ['md', 'lg'],
      control: 'select',
    },
  },
};
