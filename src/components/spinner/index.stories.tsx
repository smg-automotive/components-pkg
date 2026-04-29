import { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '.';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,

  args: {
    size: 'sm',
  },

  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],

      control: {
        type: 'select',
      },
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof Spinner>;
export const Overview: StoryType = {};

export const SizesXs: StoryType = {
  name: 'Size > xs',
  args: {
    size: 'xs',
  },
};

export const SizesSm: StoryType = {
  name: 'Size > sm',
  args: {
    size: 'sm',
  },
};

export const SizesMd: StoryType = {
  name: 'Size > md',
  args: {
    size: 'md',
  },
};

export const SizesLg: StoryType = {
  name: 'Size > lg',
  args: {
    size: 'lg',
  },
};
