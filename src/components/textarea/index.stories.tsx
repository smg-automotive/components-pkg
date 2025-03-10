import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import TextareaComponent, { Props } from './index';

const Template = (_props: Props) => {
  const [args, updateArgs] = useArgs<Props>();

  return (
    <TextareaComponent
      {...args}
      onChange={(e) => {
        updateArgs({ value: e.target.value });
        args.onChange?.(e);
      }}
    />
  );
};

const meta: Meta<typeof TextareaComponent> = {
  title: 'Components/Forms/Textarea',
  component: TextareaComponent,
  render: Template.bind({}),
  decorators: [(Story) => <Story />],

  args: {
    placeholder: 'Placeholder',
    invalid: false,
    disabled: false,
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
      control: {},
    },
    onFocus: {
      control: {},
    },
    onChange: {
      control: {},
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof TextareaComponent>;
export const Textarea: StoryType = {};

export const StateFocused: StoryType = {
  name: 'State > Focused',

  args: {
    autoFocus: true,
  },
};

export const StateInvalid: StoryType = {
  name: 'State > Invalid',

  args: {
    invalid: true,
  },
};

export const StateDisabled: StoryType = {
  name: 'State > Disabled',

  args: {
    disabled: true,
  },
};
