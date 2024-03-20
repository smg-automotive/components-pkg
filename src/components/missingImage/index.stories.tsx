import React from 'react';

import AspectRatio from '../aspectRatio';

import MissingImageComponent from './index';

const Template = (args) => (
  <AspectRatio ratio={4 / 3} width="500px">
    <MissingImageComponent {...args} />
  </AspectRatio>
);

export default {
  title: 'Patterns/Data display/Missing image',
  component: MissingImageComponent,
};

export const MissingImage = {
  render: Template.bind({}),
  name: 'Missing image',
};
