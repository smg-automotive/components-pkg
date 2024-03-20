import { useState } from 'react';

import { action } from '@storybook/addon-actions';

import { Box } from '@chakra-ui/react';

import Textarea from './index.tsx';

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
      <Textarea
        {...args}
        name="Control"
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
  title: 'Components/Forms/Textarea',
  component: Textarea,
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',

  args: {
    placeholder: 'Placeholder',
    isInvalid: false,
    isDisabled: false,
    autoFocus: false,
    onChange: true,
    onFocus: false,
    onBlur: false,
    rows: 10,
    cols: 50,
  },

  argTypes: {
    textStyle: {
      options: ['body', 'body-small'],

      control: {
        type: 'select',
      },
    },
  },
};

export const Focused = {
  render: Template.bind({}),
  name: 'Focused',

  args: {
    placeholder: 'Placeholder',
    isInvalid: false,
    isDisabled: false,
    autoFocus: true,
    rows: 10,
    cols: 50,
  },

  argTypes: {
    textStyle: {
      options: ['body', 'body-small'],

      control: {
        type: 'select',
      },
    },
  },
};

export const Invalid = {
  render: Template.bind({}),
  name: 'Invalid',

  args: {
    placeholder: 'Placeholder',
    isInvalid: true,
    isDisabled: false,
    autoFocus: false,
    rows: 10,
    cols: 50,
  },

  argTypes: {
    textStyle: {
      options: ['body', 'body-small'],

      control: {
        type: 'select',
      },
    },
  },
};

export const Didabled = {
  render: Template.bind({}),
  name: 'Didabled',

  args: {
    placeholder: 'Placeholder',
    isDisabled: true,
    isInvalid: false,
    autoFocus: false,
    rows: 10,
    cols: 50,
  },

  argTypes: {
    textStyle: {
      options: ['body', 'body-small'],

      control: {
        type: 'select',
      },
    },
  },
};
