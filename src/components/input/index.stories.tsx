import { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Box } from '@chakra-ui/react';

import Input from './index.tsx';

const Container = ({ children }) => {
  return (
    <Box w="100%" maxW="250px">
      {children}
    </Box>
  );
};

export const Template = ({ value, onChange, onBlur, onFocus, ...args }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const onChangeHandler = onChange
    ? action('change')
    : () => {
        return;
      };
  return (
    <Container>
      <Input
        {...args}
        onBlur={onBlur ? action('blur') : undefined}
        onFocus={onFocus ? action('focus') : undefined}
        onChange={
          value || value === ''
            ? (e) => {
                setCurrentValue(e.target.value);
                onChangeHandler(e);
              }
            : onChangeHandler
        }
        value={value || value === '' ? currentValue : undefined}
      />
    </Container>
  );
};

export default {
  title: 'Components/Forms/Input',
  component: Input,

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

  args: {
    placeholder: 'Placeholder',
    isDisabled: false,
    isInvalid: false,
    size: 'lg',
    onChange: true,
    onFocus: false,
    onBlur: false,
    autoFocus: false,
    value: '',
    type: 'text',
    isClearable: false,
    name: 'test',
  },

  argTypes: {
    value: {
      description: 'use value prop when you want controlled input',
    },

    size: {
      options: ['md', 'lg'],
      control: 'select',
    },

    type: {
      options: ['text', 'number', 'password'],
      control: 'select',
    },
  },
};
