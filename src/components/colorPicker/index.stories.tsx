import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { Box } from '@chakra-ui/react';

import { ColorPicker as ColorPickerComponent } from './index';

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
      <Box width="full" maxW="5xl">
        <Story />
      </Box>
    ),
  ],

  args: {
    onBlur: action('onBlur'),
    onChange: action('onChange'),
    onFocus: action('onFocus'),
    value: '#B3D3F3',
    invalid: false,
    disabled: false,
    border: '1px',
    borderColor: 'gray.200',
    borderRadius: 'sm',
    width: 'md',
    padding: '0',
  },

  argTypes: {
    value: {
      control: 'color',
    },
    invalid: {
      control: 'boolean',
    },
    disabled: {
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
