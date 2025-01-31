import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './index';

const meta: Meta<typeof Avatar> = {
  title: 'Patterns/Data Display/Avatar',
  component: Avatar,

  args: {
    withNotification: false,
    color: 'gray.900',
  },

  argTypes: {
    color: {
      control: 'color',
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof Avatar> = {};

export const WithNotification: StoryObj<typeof Avatar> = {
  args: {
    withNotification: true,
  },
};
