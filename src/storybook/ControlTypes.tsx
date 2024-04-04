import React from 'react';

import * as Icons from '../components/icons';

export const iconControl = {
  control: {
    type: 'select',
  },
  options: Object.keys(Icons).map((name) => name.replace(/Icon$/, '')),
  mapping: Object.fromEntries(
    Object.entries(Icons).map(([name, Icon]) => [
      name.replace(/Icon$/, ''),
      <Icon key={name} />,
    ]),
  ),
};
