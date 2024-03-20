import React from 'react';

import Box from 'src/components/box';

import OrderedListComponent, { styleTypes } from './OrderedList';
import ListItem from './ListItem';

const Template = ({ showContainer, ...args }) => (
  <Box maxW="100px">
    <OrderedListComponent
      {...args}
      border={showContainer ? '1px solid black' : '1px solid transparent'}
      bg={showContainer ? 'gray.100' : 'inherit'}
    >
      <ListItem>Item 1 is very long</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </OrderedListComponent>
  </Box>
);

export default {
  title: 'Components/Data display/List/Ordered list',
  component: OrderedListComponent,

  parameters: {
    layout: 'fullscreen',
  },

  args: {
    size: 'md',
    variant: 'icon-inside',
    start: 1,
    styleType: 'decimal',
    showContainer: false,
  },

  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },

    variant: {
      control: 'select',
      options: ['icon-inside', 'icon-outside'],
    },

    styleType: {
      control: 'select',
      options: styleTypes,
    },
  },
};

export const OrderedList = {
  render: Template.bind({}),
  name: 'Ordered list',
};
