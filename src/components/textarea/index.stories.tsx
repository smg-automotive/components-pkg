import React from 'react';
import { Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import TextareaComponent, { Props } from './index';

const Template = (_props: Props) => {
  const [args, updateArgs] = useArgs<Props>();

  return (
    <TextareaComponent
      {...args}
      onChange={(e) => {
        updateArgs({ value: e.target.value });
        args.onChange && args.onChange(e);
      }}
    />
  );
};

const meta: Meta<typeof TextareaComponent> = {
  title: 'Components/Forms/Textarea',
  component: TextareaComponent,
  render: Template.bind({}),
  decorators: [
    (Story) => (
      <Box w="100%" maxW="250px">
        <Story />
      </Box>
    ),
  ],

  args: {
    placeholder: 'Placeholder',
    isInvalid: false,
    isDisabled: false,
    autoFocus: false,
    onChange: action('onChange'),
    onFocus: action('onFocus'),
    onBlur: action('onBlur'),
    rows: 10,
    cols: 50,
    name: 'test-textarea',
  },

  argTypes: {
    textStyle: {
      options: ['body', 'body-small'],

      control: {
        type: 'select',
      },
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
  },
};
export default meta;

export const Textarea = {};

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
