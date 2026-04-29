import { Meta, StoryObj } from '@storybook/react';

import { SimpleHeader } from './index';

const meta: Meta<typeof SimpleHeader> = {
  title: 'Patterns/Navigation/Simple Header',
  component: SimpleHeader,

  args: {
    title: 'Nachricht an den Verkäufer',
    url: '#href',
  },
};
export default meta;

export const Overview: StoryObj<typeof SimpleHeader> = {};
