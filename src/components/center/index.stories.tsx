import { Meta, StoryObj } from '@storybook/react';

import CenterComponent from './index';

const meta: Meta<typeof CenterComponent> = {
  title: 'Layout/Center',
  component: CenterComponent,
  args: {
    children: 'I am centered',
  },
};
export default meta;

export const Overview: StoryObj<typeof CenterComponent> = {};
