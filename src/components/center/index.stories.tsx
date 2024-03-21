import React from 'react';

import CenterComponent from './index';

const Template = () => {
  return <CenterComponent>I am centered!</CenterComponent>;
};

export default {
  title: 'Layout/Center',
  component: CenterComponent,
};

export const Center = {
  render: Template.bind({}),
  name: 'Center',
};
