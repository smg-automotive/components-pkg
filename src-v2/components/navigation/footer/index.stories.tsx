import { Meta, StoryObj } from '@storybook/react';

import { Brand } from 'src/types/brand';

import FooterComponent from './index';

const meta: Meta<typeof FooterComponent> = {
  title: 'Patterns/Navigation/Footer',
  component: FooterComponent,

  parameters: {
    layout: 'fullscreen',
  },

  args: {
    brand: Brand.AutoScout24,
    language: 'de',
    environment: 'preprod',
    useAbsoluteUrls: true,
    project: undefined,
  },

  argTypes: {
    brand: {
      options: [Brand.AutoScout24, Brand.MotoScout24],
      control: 'select',
    },

    project: {
      options: ['listings-web', 'seller-web'],
      control: 'select',
    },

    language: {
      options: ['de', 'fr', 'it', 'en'],
      control: 'select',
    },

    environment: {
      options: ['preprod', 'production'],
      control: 'select',
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof FooterComponent> = {};
