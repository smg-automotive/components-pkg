import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Separator, SeparatorProps } from './index';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

const meta: Meta<typeof Separator> = {
  title: 'Components/Utils/Separator',
  component: Separator,
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    ...getRecipeControls('separator'),
  },
};

export default meta;

export const Overview: StoryObj<typeof Separator> = {
  render: ({ orientation, ...args }: SeparatorProps) => (
    <Separator
      {...args}
      orientation={orientation}
      height={orientation === 'vertical' ? 'lg' : args.height}
    />
  ),
};
