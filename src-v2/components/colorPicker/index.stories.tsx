import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import ColorPickerComponent from './index';

const Template = (props: React.ComponentProps<typeof ColorPickerComponent>) => {
  const [args, updateArgs] = useArgs<typeof props>();

  return (
    <ColorPickerComponent
      {...props}
      {...args}
      onChange={(e) => {
        args.onChange?.(e);
        updateArgs({ value: e.target.value });
      }}
    />
  );
};

const meta: Meta<typeof ColorPickerComponent> = {
  title: 'Components/Forms/Color Picker',
  component: ColorPickerComponent,
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
    value: '#B3D3F3',
    isInvalid: false,
    isDisabled: false,
    border: '1px solid #CBD5E0',
    borderRadius: '4px',
    width: '36px',
    padding: '0',
  },

  argTypes: {
    value: {
      control: 'color',
    },
    isInvalid: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    border: {
      control: 'text',
    },
    borderRadius: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    padding: {
      control: 'text',
    },
  },
};

export default meta;

export const Overview: StoryObj<typeof ColorPickerComponent> = {};
