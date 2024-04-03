import { Meta } from '@storybook/react';

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

export const Spinner = {};

export const SizesXs = {
  name: 'Size > xs',
  args: {
    size: 'xs',
  },
};

export const SizesSm = {
  name: 'Size > sm',
  args: {
    size: 'sm',
  },
};

export const SizesMd = {
  name: 'Size > md',
  args: {
    size: 'md',
  },
};

export const SizesLg = {
  name: 'Size > lg',
  args: {
    size: 'lg',
  },
};
