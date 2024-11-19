import { Meta, StoryObj } from '@storybook/react';

import { Badge } from './index';

const meta: Meta<typeof Badge> = {
  title: 'Components/Data Display/Badge',
  component: Badge,

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

export const Overview: StoryObj<typeof Badge> = {};
