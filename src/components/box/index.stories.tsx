import React from 'react';

import BoxComponent from './index';

const Template = (args) => (
  <BoxComponent {...args}>I am in the box</BoxComponent>
);

export default {
  title: 'Layout/Box',
  component: BoxComponent,
};

export const Box = {
  render: Template.bind({}),
  name: 'Box',

  args: {
    padding: '2xl',
    borderColor: 'gray.900',
    borderWidth: '1px',
  },
};
