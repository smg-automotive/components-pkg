import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Text } from '../text';

import { Flex } from '../flex';

import CollapseComponent, { CollapseProps } from './index';

const meta: Meta<typeof CollapseComponent> = {
  title: 'Components/Utils/Collapse',
  component: CollapseComponent,
  args: {
    in: true,
  },
};
export default meta;

const Collapse = (props: CollapseProps) => {
  const [open, setOpen] = React.useState(props.in);

  return (
    <Flex direction="column" alignItems="start">
      <button onClick={() => setOpen((prev) => !prev)}>Toggle me!</button>
      <CollapseComponent {...props} in={open}>
        <Text>Hello World!</Text>
      </CollapseComponent>
    </Flex>
  );
};

export const Overview: StoryObj<typeof CollapseComponent> = {
  render: (props: CollapseProps) => <Collapse {...props} />,
};
