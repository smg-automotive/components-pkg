import { Meta, StoryObj } from '@storybook/react';

import RatingComponent from './index';

const meta: Meta<typeof RatingComponent> = {
  title: 'Components/Data display/Rating',
  component: RatingComponent,

  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large'],
    },

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

type StoryType = StoryObj<typeof RatingComponent>;
export const Large: StoryType = {
  args: {
    rating: 4.5,
    size: 'large',
  },
};

export const Small: StoryType = {
  args: {
    rating: 4.5,
    size: 'small',
  },
};
