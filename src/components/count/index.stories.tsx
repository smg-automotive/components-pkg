import { Meta, StoryObj } from '@storybook/react';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

import { Count } from './index';

const meta: Meta<typeof Count> = {
  title: 'Components/Data display/Count',
  component: Count,
  args: {
    count: 1,
    variant: 'primary',
  },
  argTypes: {
    ...getRecipeControls('count'),
  },
};
export default meta;

export const Overview: StoryObj<typeof Count> = {
  args: {
    count: 1,
    variant: 'primary',
  },
};

export const Primary: StoryObj<typeof Count> = {
  args: {
    count: 1,
    variant: 'primary',
  },
};

export const Inverted: StoryObj<typeof Count> = {
  args: {
    count: 2,
    variant: 'inverted',
  },
};

export const Info: StoryObj<typeof Count> = {
  args: {
    count: 3,
    variant: 'info',
  },
};

export const Success: StoryObj<typeof Count> = {
  args: {
    count: 4,
    variant: 'success',
  },
};

export const Warning: StoryObj<typeof Count> = {
  args: {
    count: 5,
    variant: 'warning',
  },
};

export const Error: StoryObj<typeof Count> = {
  args: {
    count: 6,
    variant: 'error',
  },
};
