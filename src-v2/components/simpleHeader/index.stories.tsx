import { Meta, StoryObj } from '@storybook/react';

import SimpleHeaderComponent from './index';

const meta: Meta<typeof SimpleHeaderComponent> = {
  title: 'Patterns/Navigation/Simple Header',
  component: SimpleHeaderComponent,

  args: {
    title: 'Nachricht an den Verkäufer',
    url: '#href',
  },
};
export default meta;

export const Overview: StoryObj<typeof SimpleHeaderComponent> = {};
