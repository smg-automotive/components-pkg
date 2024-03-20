import React from 'react';

import CountComponent from './index';

const Template = (args) => <CountComponent {...args} />;

export default {
  title: 'Components/Data display/Count',
  component: CountComponent,

  argTypes: {
    variant: {
      type: 'select',
      options: ['primary', 'inverted'],
    },
  },
};

export const Count = {
  render: Template.bind({}),
  name: 'Count',

  args: {
    variant: 'primary',
    count: '50',
  },
};
