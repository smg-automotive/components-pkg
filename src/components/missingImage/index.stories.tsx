import { Meta, StoryObj } from '@storybook/react';

import { sharedConfig } from 'src/themes/shared';

import { MissingImage } from './index';

const meta: Meta<typeof MissingImage> = {
  title: 'Patterns/Data display/Missing image',
  component: MissingImage,
  args: {
    aspectRatio: 'square',
    width: '500px',
  },
  argTypes: {
    aspectRatio: {
      options: Object.keys(sharedConfig.theme.tokens.aspectRatios),
      control: {
        type: 'select',
      },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof MissingImage> = {};
