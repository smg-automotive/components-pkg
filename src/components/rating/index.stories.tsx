import { Meta, StoryObj } from '@storybook/react';

import { Rating } from './index';

const meta: Meta<typeof Rating> = {
  title: 'Components/Data display/Rating',
  component: Rating,

  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
};

export default meta;

type StoryType = StoryObj<typeof Rating>;

export const Large: StoryType = {
  args: {
    rating: 2.5,
    size: 'lg',
  },
};

export const Small: StoryType = {
  args: {
    rating: 3.7,
    size: 'sm',
  },
};
