import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import ColorPickerComponent, { ColorPickerProps } from './index';

const Template = (props: ColorPickerProps) => {
  const [args, updateArgs] = useArgs<ColorPickerProps>();

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
    size: 'md',
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
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
};

export default meta;

export const Overview: StoryObj<typeof ColorPickerComponent> = {};
