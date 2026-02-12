import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import { Text } from '../text';
import { Flex } from '../flex';

import { Collapse as CollapseComponent, CollapseProps } from './index';

const CollapseTemplate = (props: CollapseProps) => {
  const [{ in: open }, updateArgs] = useArgs<CollapseProps>();

  return (
    <Flex direction="column" alignItems="start">
      <button onClick={() => updateArgs({ in: !open })}>Toggle me!</button>
      <CollapseComponent {...props} in={open}>
        <Text>Hello World!</Text>
      </CollapseComponent>
    </Flex>
  );
};

const meta: Meta<typeof CollapseComponent> = {
  title: 'Components/Utils/Collapse',
  component: CollapseComponent,
  render: CollapseTemplate,
  args: {
    in: false,
    animateOpacity: true,
  },
};

export default meta;

export const Overview: StoryObj<typeof CollapseComponent> = {};
