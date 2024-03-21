import { Meta } from '@storybook/react';

import BadgeComponent from './index';

const meta: Meta<typeof BadgeComponent> = {
  title: 'Components/Data Display/Badge',
  component: BadgeComponent,

  args: {
    text: 'Example Badge',
  },
};

export const Badge = {};
export default meta;
