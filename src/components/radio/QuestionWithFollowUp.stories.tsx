import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs, useStoryContext } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

import QuestionWithFollowUpComponent, { Props } from './QuestionWithFollowUp';

const Template = (props: Props) => {
  const [args, updateArgs] = useArgs<{ values: Record<string, string> }>();
  const storyContext = useStoryContext();
  const isInDocs = storyContext.viewMode === 'docs';

  const [localValues, setLocalValues] = useState<Record<string, string>>(
    args.values,
  );

  const handleChange = (newValues: Record<string, string>) => {
    if (isInDocs) {
      setLocalValues(newValues);
    } else {
      updateArgs({ values: newValues });
    }
    props.onChange?.(newValues);
    action('onChange')(newValues);
  };

  return (
    <QuestionWithFollowUpComponent
      {...props}
      {...args}
      values={isInDocs ? localValues : args.values}
      onChange={handleChange}
    />
  );
};

const meta: Meta<typeof QuestionWithFollowUpComponent> = {
  title: 'Components/Forms/Question With FollowUp',
  component: QuestionWithFollowUpComponent,
  render: Template.bind({}),

  args: {
    id: 'main-question',
    name: 'main-question',
    values: {},
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
    onChange: action('onChange'),
  },
};
export default meta;

type StoryType = StoryObj<typeof QuestionWithFollowUpComponent>;

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
  args: {
    name: 'main-question-with-follow-up',
    groupLabel: 'Is the Vehicle imported?',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
    followUps: {
      yes: {
        id: 'follow-up-group',
        name: 'follow-up-group',
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
