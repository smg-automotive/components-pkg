import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Text from '../text';

import CollapseComponent, { CollapseProps } from './index';

const meta: Meta<typeof CollapseComponent> = {
  title: 'Components/Utils/Collapse',
  component: CollapseComponent,

  args: {
    in: true,
  },
};
export default meta;

export const Overview: StoryObj<typeof CollapseComponent> = {
  render: ({ in: inProp, ...args }: CollapseProps) => (
    <CollapseComponent {...args} in={inProp}>
      <Text>Hello World!</Text>
    </CollapseComponent>
  ),
};
