import React from 'react';

import { Brand } from 'src/types/brand';

import FooterComponent from './index';

const Template = (args) => <FooterComponent {...args} />;

export default {
  title: 'Patterns/Navigation/Footer',
  component: FooterComponent,

  parameters: {
    layout: 'fullscreen',
  },

  args: {
    brand: Brand.AutoScout24,
    language: 'de',
    environement: 'preprod',
    useAbsoluteUrls: true,
  },

  argTypes: {
    brand: {
      options: [Brand.AutoScout24, Brand.MotoScout24],
      control: 'select',
    },

    language: {
      options: ['de', 'fr', 'it', 'en'],
      control: 'select',
    },

    environement: {
      options: ['preprod', 'production'],
      control: 'select',
    },
  },
};

export const Footer = {
  render: Template.bind({}),
  name: 'Footer',
};
