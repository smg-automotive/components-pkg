import { Meta, StoryObj } from '@storybook/react';

import BadgeComponent from './index';

const meta: Meta<typeof BadgeComponent> = {
  title: 'Components/Data Display/Badge',
  component: BadgeComponent,

  args: {
    text: 'Example Badge',
    variant: 'base',
  },

  argTypes: {
    variant: {
      options: ['base', 'navigationLinkBadge'],
      control: { type: 'select' },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof BadgeComponent> = {};
