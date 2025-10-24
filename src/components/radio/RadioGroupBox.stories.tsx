import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import RadioGroupBoxComponent, { Props } from './RadioGroupBox';

const Template = (props: Props) => {
  const [args, updateArgs] = useArgs<Props>();

  return (
    <RadioGroupBoxComponent
      {...props}
      {...args}
      value={args.value}
      onChange={(value: string) => {
        updateArgs({ value });
        action('onChange')(value);
      }}
    />
  );
};

const meta: Meta<typeof RadioGroupBoxComponent> = {
  title: 'Components/Forms/Radio Group Box',
  component: RadioGroupBoxComponent,
  render: Template.bind({}),

  args: {
    id: 'test-radio-group-box',
    value: 'Incomplete',
    name: 'test-radio-group-box',
    groupLabel: 'Service booklet Available?',
    options: [
      { label: 'Available', value: 'available' },
      { label: 'Incomplete', value: 'incomplete' },
      { label: 'Missing', value: 'missing' },
    ],
    tooltip: '',
    hint: '',
    errorMessage: '',
  },
};
export default meta;

type StoryType = StoryObj<typeof RadioGroupBoxComponent>;

export const Overview: StoryType = {};

export const StateDefault: StoryType = {
  name: 'Default',
};

export const StateWithTooltip: StoryType = {
  name: 'With Tooltip',

  args: {
    tooltip: 'Hello I am a tooltip text',
  },
};

export const StateWithHint: StoryType = {
  name: 'With Hint',

  args: {
    hint: 'Hello, I am hint text',
  },
};

export const StateInvalid: StoryType = {
  name: 'Invalid',

  args: {
    errorMessage: 'Error message',
  },
};
