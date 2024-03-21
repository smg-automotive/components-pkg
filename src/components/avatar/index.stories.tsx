import { Meta } from '@storybook/react';

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

export const Avatar = {};

export const WithNotification = {
  args: {
    withNotification: true,
  },
};

export default meta;
