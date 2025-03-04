import { Meta, StoryObj } from '@storybook/react';

import CountComponent from './index';

const meta: Meta<typeof CountComponent> = {
  title: 'Components/Data display/Count',
  component: CountComponent,
  argTypes: {
    variant: {
      options: ['primary', 'inverted', 'info', 'success', 'warning', 'error'],
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof CountComponent> = {
  args: {
    variant: 'primary',
    count: 1000,
  },
};
