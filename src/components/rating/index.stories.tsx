import { Meta } from '@storybook/react';

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

export const Large = {
  args: {
    rating: 4.5,
    size: 'large',
  },
};

export const Small = {
  args: {
    rating: 4.5,
    size: 'small',
  },
};
