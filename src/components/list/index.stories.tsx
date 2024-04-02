import React from 'react';
import { Meta } from '@storybook/react';

import ListItem from './ListItem';

import ListComponent, { Props } from './index';

const Template = ({ items, ...args }: Props & { items: number }) => (
  <ListComponent {...args}>
    {Array.from({ length: items }, (_, i) => (
      <ListItem key={i}>Item {i + 1}</ListItem>
    ))}
  </ListComponent>
);

const meta: Meta<typeof Template> = {
  title: 'Components/Data display/List/Unstyled list',
  component: ListComponent,

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

export const UnstyledList = {
  render: Template.bind({}),
  name: 'Unstyled list',
};
