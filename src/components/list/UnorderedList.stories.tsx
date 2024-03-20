import React from 'react';

import Box from 'src/components/box';

import UnorderedListComponent, { styleTypes } from './UnorderedList';
import ListItem from './ListItem';

const Template = ({ showContainer, ...args }) => (
  <Box maxW="100px">
    <UnorderedListComponent
      {...args}
      border={showContainer ? '1px solid black' : '1px solid transparent'}
      bg={showContainer ? 'gray.100' : 'inherit'}
    >
      <ListItem>Item 1 is very long</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </UnorderedListComponent>
  </Box>
);

export default {
  title: 'Components/Data display/List/Unordered list',
  component: UnorderedListComponent,

  parameters: {
    layout: 'fullscreen',
  },

  args: {
    size: 'md',
    variant: 'icon-inside',
    styleType: 'initial',
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

    showContainer: {
      control: 'boolean',
    },
  },
};

export const UnorderedList = {
  render: Template.bind({}),
  name: 'Unordered list',
};
