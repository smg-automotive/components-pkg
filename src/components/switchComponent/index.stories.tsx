import React from 'react';

import SwitchComponent from './index';

const Template = (args) => {
  return <SwitchComponent {...args} />;
};

export default {
  title: 'Components/Forms/Switch',
  component: SwitchComponent,
};

export const Switch = {
  render: Template.bind({}),
  name: 'Switch',

  args: {
    variant: 'default',
  },

  argTypes: {
    variant: {
      options: ['themeSwitch', 'default'],
      control: 'select',
    },
  },
};
