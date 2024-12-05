import { Meta, StoryObj } from '@storybook/react';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

import { Badge } from './index';

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
