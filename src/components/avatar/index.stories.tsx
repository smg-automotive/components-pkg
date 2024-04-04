import { Meta, StoryObj } from '@storybook/react';

import AvatarComponent from './index';

const meta: Meta<typeof AvatarComponent> = {
  title: 'Patterns/Data Display/Avatar',
  component: AvatarComponent,

  args: {
    withNotification: false,
  },

  argTypes: {
    color: {
      control: 'color',
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof AvatarComponent> = {};

export const WithNotification: StoryObj<typeof AvatarComponent> = {
  args: {
    withNotification: true,
  },
};
