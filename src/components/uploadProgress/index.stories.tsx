import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Text } from '../text';

import { UploadProgress } from './index';

const createLabel = (current: number, max: number) => (
  <>
    <Text as="span" fontWeight="bold">
      {current}
    </Text>{' '}
    of {max} photos added{' '}
    <Text as="span" color="red.500">
      *
    </Text>
  </>
);

const meta: Meta<typeof UploadProgress> = {
  title: 'Components/Feedback/Upload Progress',
  component: UploadProgress,

  args: {
    current: 0,
    max: 13,
  },

  argTypes: {
    current: {
      control: { type: 'number', min: 0 },
    },
    max: {
      control: { type: 'number', min: 1 },
    },
    label: {
      control: false,
    },
  },

  render: (args) => (
    <UploadProgress {...args} label={createLabel(args.current, args.max)} />
  ),
};

export default meta;

type StoryType = StoryObj<typeof UploadProgress>;

export const Overview: StoryType = {};

export const InitialState: StoryType = {
  name: 'Initial State (0%)',
  args: {
    current: 0,
    max: 13,
  },
};

export const PartialProgress: StoryType = {
  name: 'Partial Progress',
  args: {
    current: 5,
    max: 13,
  },
};

export const Completed: StoryType = {
  name: 'Completed (100%)',
  args: {
    current: 13,
    max: 13,
  },
};
