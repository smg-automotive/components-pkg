import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Text from '../text';

import Highlight from './index';

const meta: Meta<typeof Highlight> = {
  title: 'Components/Utils/Highlight',
  component: Highlight,
  args: {
    children: <Text>Default text</Text>,
    variant: 'as24',
  },

  argTypes: {
    variant: {
      options: ['as24', 'ms24', 'white'],
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
    variant: 'as24',
    children: <Text>Profi Ratgen</Text>,
  },
};

export const MS24Variant: StoryType = {
  args: {
    variant: 'ms24',
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
