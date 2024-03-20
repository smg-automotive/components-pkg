import { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Box } from '../index';
import Select from './index.tsx';

const Container = ({ children }) => {
  return (
    <Box w="100%" maxW="250px">
      {children}
    </Box>
  );
};

const Template = ({ value, onChange, onBlur, onFocus, ...args }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const onChangeHandler = onChange
    ? action('change')
    : () => {
        return;
      };
  return (
    <Container>
      <Select
        {...args}
        onBlur={onBlur ? action('blur') : undefined}
        onFocus={onFocus ? action('focus') : undefined}
        onChange={
          value
            ? (e) => {
                setCurrentValue(e.target.value);
                onChangeHandler(e);
              }
            : onChangeHandler
        }
        value={value ? currentValue : undefined}
      />
    </Container>
  );
};

export default {
  title: 'Components/Forms/Select',
  component: Select,

  args: {
    placeholder: 'Select an option',
    isDisabled: false,
    isInvalid: false,
    size: 'lg',
    onChange: true,
    onFocus: false,
    onBlur: false,
    autoFocus: false,

    options: [
      {
        value: 'o1',
        label: 'Option 1',
      },
      {
        value: 'o2',
        label: 'Option 2',
      },
      {
        value: 'o3',
        label: 'Option 3',
      },
      {
        value: 'o4',
        label: 'Option 4',
      },
      {
        value: 'o5',
        label: 'Option 5',
      },
      {
        value: 'o6',
        label: 'Option 6',
      },
    ],

    value: '',
  },

  argTypes: {
    value: {
      description: 'use value prop when you want controlled select',
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

    actions: ['change', 'blur', 'focus'],
  },
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',
};

export const Focused = {
  render: Template.bind({}),
  name: 'Focused',

  args: {
    onFocus: true,
    autoFocus: true,
  },
};

export const Invalid = {
  render: Template.bind({}),
  name: 'Invalid',

  args: {
    isInvalid: true,
  },
};

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    isDisabled: true,
  },
};
