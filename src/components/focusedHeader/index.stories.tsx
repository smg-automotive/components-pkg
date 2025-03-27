import { Meta, StoryObj } from '@storybook/react';

import { Brand } from 'src/types/brand';

import FocusedHeader from './index';

const meta: Meta<typeof FocusedHeader> = {
  title: 'Patterns/Navigation/Focused Header',
  component: FocusedHeader,

  args: {
    brand: Brand.AutoScout24,
  },

  argTypes: {
    brand: {
      options: [Brand.AutoScout24, Brand.MotoScout24],
      control: 'select',
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof FocusedHeader> = {};
