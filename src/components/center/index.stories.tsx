import { Meta } from '@storybook/react';

import CenterComponent from './index';

const meta: Meta<typeof CenterComponent> = {
  title: 'Layout/Center',
  component: CenterComponent,
  args: {
    children: 'I am centered',
  },
};

export const Center = {};
export default meta;
