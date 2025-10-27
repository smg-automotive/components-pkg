import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import RadioGroupBoxComponent, { Props } from './RadioGroupBox';

const Template = (props: Props) => {
  const [args, updateArgs] = useArgs<{ values: Record<string, string> }>();

  const handleChange = (newValues: Record<string, string>) => {
    updateArgs({ values: newValues });
    action('onChange')(newValues);
  };

  return (
    <RadioGroupBoxComponent
      {...props}
      {...args}
      values={args.values}
      onChange={handleChange}
    />
  );
};

const meta: Meta<typeof RadioGroupBoxComponent> = {
  title: 'Components/Forms/Radio Group Box',
  component: RadioGroupBoxComponent,
  render: Template.bind({}),

  args: {
    id: 'main-radio-group-box',
    values: {},
    name: 'main-radio-group-box',
    groupLabel: 'Service booklet Available?',
    options: [
      { label: 'Available', value: 'available' },
      { label: 'Incomplete', value: 'incomplete' },
      { label: 'Missing', value: 'missing' },
    ],
    tooltip: '',
    hint: '',
    errorMessage: '',
    followUps: {},
  },
};
export default meta;

type StoryType = StoryObj<typeof RadioGroupBoxComponent>;

export const Overview: StoryType = {};

export const Default: StoryType = {
  name: 'Default',

  args: {
    options: [
      { label: 'Available', value: 'available' },
      { label: 'Incomplete', value: 'incomplete' },
      { label: 'Missing', value: 'missing' },
    ],
  },
};

export const WithTooltip: StoryType = {
  name: 'With Tooltip',

  args: {
    options: [
      { label: 'Available', value: 'available' },
      { label: 'Incomplete', value: 'incomplete' },
      { label: 'Missing', value: 'missing' },
    ],
    tooltip: 'Hello I am a tooltip text',
  },
};

export const WithHint: StoryType = {
  name: 'With Hint',

  args: {
    options: [
      { label: 'Available', value: 'available' },
      { label: 'Incomplete', value: 'incomplete' },
      { label: 'Missing', value: 'missing' },
    ],
    hint: 'Hello, I am hint text',
  },
};

export const Invalid: StoryType = {
  name: 'Invalid',

  args: {
    options: [
      { label: 'Available', value: 'available' },
      { label: 'Incomplete', value: 'incomplete' },
      { label: 'Missing', value: 'missing' },
    ],
    errorMessage: 'Error message',
  },
};

export const WithFollowUp: StoryType = {
  name: 'With Follow-up question',

  args: {
    groupLabel: 'Is the Vehicle imported?',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
    followUps: {
      yes: {
        id: 'follow-up-radio-group',
        name: 'follow-up-radio-group',
        groupLabel: 'Is there a certificate of conformity?',
        tooltip: '',
        hint: '',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
      },
    },
  },
};
