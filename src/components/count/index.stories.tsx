import { Meta, StoryObj } from '@storybook/react';

import { Count } from './index';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

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

export const PrimaryCount: StoryObj<typeof Count> = {
  args: {
    count: 1,
    variant: 'primary',
  },
};

export const InvertedCount: StoryObj<typeof Count> = {
  args: {
    count: 2,
    variant: 'inverted',
  },
};

export const InfoCount: StoryObj<typeof Count> = {
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

export const WarningCount: StoryObj<typeof Count> = {
  args: {
    count: 5,
    variant: 'warning',
  },
};

export const ErrorCount: StoryObj<typeof Count> = {
  args: {
    count: 6,
    variant: 'error',
  },
};
