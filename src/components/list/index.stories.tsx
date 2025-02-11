import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

import { List, ListProps } from './index';

const Template = ({ items, ...args }: ListProps & { items: number }) => (
  <List.Root {...args}>
    {Array.from({ length: items }, (_, i) => (
      <List.Item key={i}>Item {i + 1}</List.Item>
    ))}
  </List.Root>
);

const meta: Meta<typeof Template> = {
  title: 'Components/Data display/List/Unstyled list',
  render: Template.bind({}),

  args: {
    size: 'md',
    items: 5,
  },

  argTypes: {
    ...getRecipeControls('list'),
  },
};
export default meta;

export const Overview: StoryObj<typeof Template> = {};
