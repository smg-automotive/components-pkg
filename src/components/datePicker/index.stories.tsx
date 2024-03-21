import React, { FC, PropsWithChildren, useState } from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import DatePickerComponent, { DatePickerProps } from './index';

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box w="100%" maxW="250px">
      {children}
    </Box>
  );
};

const Template = ({
  value,
  onChange,
  onBlur,
  onFocus,
  min,
  ...args
}: Omit<DatePickerProps, 'onChange' | 'onBlur' | 'onFocus'> & {
  onChange?: boolean;
  onBlur?: boolean;
  onFocus?: boolean;
}) => {
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
        min={min ? new Date(min) : undefined}
        onBlur={onBlur ? action('blur') : undefined}
        onFocus={onFocus ? action('focus') : undefined}
        onChange={(e) => {
          setCurrentValue(e.target.value);
          onChangeHandler(e);
        }}
        value={value ? currentValue : undefined}
      />
    </Container>
  );
};

const meta: Meta<typeof Template> = {
  title: 'Components/Forms/Date Picker',

  parameters: {
    controls: {
      sort: 'alpha',
      expanded: true,
    },
  },

  args: {
    onBlur: true,
    onChange: true,
    onFocus: true,
  },

  argTypes: {
    min: {
      control: 'date',
    },
    onBlur: {
      control: 'boolean',
    },
    onFocus: {
      control: 'boolean',
    },
    onChange: {
      control: 'boolean',
    },
  },
};

export const DatePicker = {
  render: Template.bind({}),

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

export default meta;
