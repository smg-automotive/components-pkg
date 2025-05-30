import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

import { Box } from '../box';

import { List, ListRootProps } from './index';

const Template = ({
  items,
  showContainer,
  longText,
  ...args
}: ListRootProps & {
  items: number;
  showContainer: boolean;
  longText: boolean;
}) => (
  <List.Root
    {...args}
    {...(showContainer
      ? {
          border: '1px',
          borderColor: 'gray.900',
          bg: 'gray.100',
          display: 'inline-block',
        }
      : {})}
  >
    {Array.from({ length: items }, (_, i) => (
      <List.Item key={i}>
        Item {i + 1} {longText ? 'lorem ipsum dolor sit amet' : ''}
      </List.Item>
    ))}
  </List.Root>
);

/**
 * Use combination of `showContainer` and `longText` to see the difference between `listStylePosition` `inside` and `outside`.
 * */
const meta: Meta<typeof Template> = {
  title: 'Components/Data display/List',
  render: Template.bind({}),

  decorators: [
    (Story) => (
      <Box maxW="4xl">
        <Story />
      </Box>
    ),
  ],

  args: {
    size: 'md',
    items: 5,
    showContainer: false,
    longText: false,
  },

  argTypes: {
    ...getRecipeControls('list'),
    as: {
      control: 'select',
      options: ['ul', 'ol'],
    },
    listStyleType: {
      control: 'select',
      options: [
        'none',
        'disc',
        'circle',
        'square',
        'initial',
        'decimal',
        'lower-alpha',
        'lower-roman',
        'upper-alpha',
        'upper-roman',
      ],
    },
    listStylePosition: {
      control: 'select',
      options: ['inside', 'outside'],
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof Template> = {};

/** Use `as=ul` and appropriate `listStyleType` for unordered list */
export const UnorderedList: StoryObj<typeof Template> = {
  args: {
    as: 'ul',
    listStyleType: 'initial',
  },
};

/** Use `as=ol` and appropriate `listStyleType` for ordered list */
export const OrderedList: StoryObj<typeof Template> = {
  args: {
    as: 'ol',
    listStyleType: 'decimal',
  },
};

export const WithIconInside: StoryObj<typeof Template> = {
  args: {
    as: 'ol',
    listStyleType: 'decimal',
    listStylePosition: 'inside',
    longText: true,
    showContainer: true,
  },
};

export const WithIconOutside: StoryObj<typeof Template> = {
  args: {
    as: 'ol',
    listStyleType: 'decimal',
    listStylePosition: 'outside',
    longText: true,
    showContainer: true,
  },
};
