import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import { Field } from '../field';

import { Textarea as TextareaComponent, TextareaProps } from './index';

type StoryProps = TextareaProps & { errorMessage: string };

const Template = (_props: StoryProps) => {
  const [args, updateArgs] = useArgs<StoryProps>();
  const { errorMessage, ...rest } = args;

  return (
    <Field id="example-id" errorMessage={errorMessage}>
      <TextareaComponent
        {...rest}
        onChange={(e) => {
          updateArgs({ value: e.target.value });
          args.onChange?.(e);
        }}
      />
    </Field>
  );
};

const meta: Meta<StoryProps> = {
  title: 'Components/Forms/Textarea',
  component: TextareaComponent,
  render: Template.bind({}),
  decorators: [(Story) => <Story />],

  args: {
    placeholder: 'Placeholder',
    disabled: false,
    autoFocus: false,
    onChange: action('onChange'),
    onFocus: action('onFocus'),
    onBlur: action('onBlur'),
    rows: 10,
    cols: 50,
    name: 'test-textarea',
    errorMessage: '',
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
    errorMessage: { control: 'text' },
  },
};
export default meta;

type StoryType = StoryObj<StoryProps>;
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
    errorMessage: "Something's wrong",
  },
};

export const StateDisabled: StoryType = {
  name: 'State > Disabled',

  args: {
    disabled: true,
  },
};
