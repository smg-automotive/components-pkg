import React from 'react';
import { Meta } from '@storybook/react';

import DividerComponent, { DividerProps } from './index';

const meta: Meta<typeof DividerComponent> = {
  title: 'Components/Utils/Divider',
  component: DividerComponent,

  args: {
    orientation: 'horizontal',
  },

  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: 'select',
    },
  },
};

export const Divider = {
  render: ({ orientation, ...args }: DividerProps) => (
    <DividerComponent
      {...args}
      orientation={orientation}
      height={orientation === 'vertical' ? '50px' : args.height}
    />
  ),
};
export default meta;
