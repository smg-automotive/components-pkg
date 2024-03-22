import React from 'react';
import { Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Description, Stories, Subtitle, Title } from '@storybook/blocks';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import Input, { InputProps } from '.';

export const decorators: Meta<typeof Input>['decorators'] = [
  (Story) => (
    <Box w="100%" maxW="250px">
      <Story />
    </Box>
  ),
];

export const parameters: Meta<typeof Input>['parameters'] = {
  docs: {
    controls: {
      sort: 'alpha',
    },
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Stories />
      </>
    ),
  },
};

export const argTypes: Meta<typeof Input>['argTypes'] = {
  size: { control: 'select' },

  value: {
    control: { type: 'text' },
    description: 'use value prop when you want controlled input',
  },

  type: {
    control: 'select',
  },

  setInputValue: {
    description: 'used to set value for debounced input',
    control: 'none',
  },

  onBlur: {
    control: 'none',
  },

  onFocus: {
    control: 'none',
  },

  onChange: {
    control: 'none',
  },
};

export const args: Meta<typeof Input>['args'] = {
  placeholder: 'Placeholder',
  isDisabled: false,
  isInvalid: false,
  size: 'lg',
  onChange: action('onChange'),
  onFocus: action('onFocus'),
  onBlur: action('onBlur'),
  autoFocus: false,
  value: '',
  type: 'text',
  isClearable: false,
  name: 'test-input',
  debounce: false,
  icon: undefined,
};

const Template: Meta<typeof Input>['render'] = ({
  value: argValue,
  onChange,
  ...props
}: InputProps) => {
  const [{ value }, updateArgs] = useArgs();
  return (
    <Input
      {...({
        ...props,
        ...(argValue || argValue === '' || argValue === 0
          ? {
              value,
              onChange: (e) => {
                updateArgs({ value: e.target.value });
                onChange && onChange(e);
              },
            }
          : { onChange }),
      } as InputProps)}
    />
  );
};
export const render = Template.bind({});
