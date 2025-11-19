import { Meta, StoryObj } from '@storybook/react';

import { Badge } from './index';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

const meta: Meta<typeof Badge> = {
  title: 'Components/Data Display/Badge',
  component: Badge,

  args: {
    text: 'Example Badge',
    variant: 'base',
  },

  argTypes: {
    ...getRecipeControls('badge'),
  },
};
export default meta;

export const Overview: StoryObj<typeof Badge> = {};
