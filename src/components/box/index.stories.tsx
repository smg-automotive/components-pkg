import { Meta, StoryObj } from '@storybook/react';

import { space } from 'src/themes/shared/space';

import BoxComponent from './index';

const meta: Meta<typeof BoxComponent> = {
  title: 'Layout/Box',
  component: BoxComponent,

  args: {
    padding: '2xl',
    borderColor: 'gray.900',
    borderWidth: '1px',
    children: 'I am a box',
  },
  argTypes: {
    padding: {
      control: { type: 'select' },
      options: Object.keys(space),
    },
    borderColor: {
      control: 'color',
    },
    borderWidth: {
      control: 'number',
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof BoxComponent> = {};
