import React from 'react';

import BadgeComponent from './index';

const Template = ({ text }) => <BadgeComponent text={text} />;

export default {
  title: 'Components/Data Display/Badge',
  component: BadgeComponent,
};

export const Badge = {
  render: Template.bind({}),
  name: 'Badge',

  args: {
    text: 'Example Badge',
  },
};
