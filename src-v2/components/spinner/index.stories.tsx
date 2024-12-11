import { Meta, StoryObj } from '@storybook/react';

import SpinnerComponent from './index';

const meta: Meta<typeof SpinnerComponent> = {
  title: 'Components/Feedback/Spinner',
  component: SpinnerComponent,

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

type StoryType = StoryObj<typeof SpinnerComponent>;
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
