import React from 'react';

import AvatarComponent from './index';

const Template = (args) => <AvatarComponent {...args} />;

export default {
  title: 'Patterns/Data Display/Avatar',
  component: AvatarComponent,
};

export const Avatar = {
  render: Template.bind({}),
  name: 'Avatar',

  args: {
    withNotification: false,
  },
};
