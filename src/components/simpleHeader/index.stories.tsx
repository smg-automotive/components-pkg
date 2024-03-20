import React from 'react';

import SimpleHeaderComponent from './index';

const Template = (args) => <SimpleHeaderComponent {...args} />;

export default {
  title: 'Patterns/Navigation/Simple Header',
  component: SimpleHeaderComponent,
};

export const SimpleHeader = {
  render: Template.bind({}),
  name: 'Simple Header',

  args: {
    title: 'Nachricht an den Verkäufer',
    url: 'https://www.autoscout24.ch/de',
  },
};
