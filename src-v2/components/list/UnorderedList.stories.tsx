import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from 'src/components/box';

import UnorderedListComponent, { Props, styleTypes } from './UnorderedList';
import ListItem from './ListItem';

const Template = ({
  showContainer,
  ...args
}: Props & { showContainer: boolean }) => (
  <UnorderedListComponent
    {...{
      ...args,
      border: showContainer ? '1px solid black' : undefined,
      bg: showContainer ? 'gray.100' : undefined,
    }}
  >
    <ListItem>Item 1 lorem ipsum dolor sit amet</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </UnorderedListComponent>
);

const meta: Meta<typeof Template> = {
  title: 'Components/Data display/List/Unordered list',
  component: UnorderedListComponent,
  render: Template.bind({}),

  decorators: [
    (Story) => (
      <Box maxW="200px">
        <Story />
      </Box>
    ),
  ],

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
      options: [...styleTypes],
    },

    showContainer: {
      control: 'boolean',
    },
  },
};
export default meta;

/**
 * Use `showContainer` to see the difference between `icon-inside` and `icon-outside` variants.
 * */
export const Overview: StoryObj<typeof UnorderedListComponent> = {};
