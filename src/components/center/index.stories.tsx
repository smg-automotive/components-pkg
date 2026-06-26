import { Meta, StoryObj } from '@storybook/react';

import { Center } from './index';

const meta: Meta<typeof Center> = {
  title: 'Layout/Center',
  component: Center,
  args: {
    children: 'I am centered',
  },
};
export default meta;

export const Overview: StoryObj<typeof Center> = {};
