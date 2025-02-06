import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { List, ListProps } from './index';

const Template = ({ items, size = 'md', ...args }: ListProps & { items: number }) => (
  <List.Root {...args}>
    {Array.from({ length: items }, (_, i) => (
      <List.Item key={i}>Item {i + 1}</List.Item>
    ))}
  </List.Root>
);

const meta: Meta<typeof Template> = {
  title: 'Components/Data display/List/Unstyled list',
  component: List.Root,
  render: Template.bind({}),

  args: {
    size: 'md',
    items: 5,
  },

  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: 'select',
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof Template> = {};