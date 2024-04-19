import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Brand } from 'src/types/brand';

import Text from '../text';

import Highlight from './index';

const meta: Meta<typeof Highlight> = {
  title: 'Components/Utils/Highlight',
  component: Highlight,
  args: {
    children: <Text>Default text</Text>,
    variant: Brand.AutoScout24,
  },

  argTypes: {
    variant: {
      options: [Brand.AutoScout24, Brand.MotoScout24, 'white'],
      control: 'select',
    },
    children: {
      control: 'text',
    },
  },
};
export default meta;
type StoryType = StoryObj<typeof Highlight>;

export const Overview: StoryType = {};

export const AS24Variant: StoryType = {
  args: {
    variant: Brand.AutoScout24,
    children: <Text>Profi Ratgen</Text>,
  },
};

export const MS24Variant: StoryType = {
  args: {
    variant: Brand.MotoScout24,
    children: <Text>Profi Ratgen longer text</Text>,
  },
};

export const WhiteVariant = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    variant: 'white',
    children: <Text>Progen</Text>,
  },
};
