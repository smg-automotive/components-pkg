import { Meta, StoryObj } from '@storybook/react';

import { List } from './index';

// const Template = ({ items, ...args }: Props & { items: number }) => (
//   <ListComponent {...args}>
//     {Array.from({ length: items }, (_, i) => (
//       <ListItem key={i}>Item {i + 1}</ListItem>
//     ))}
//   </ListComponent>
// );

const meta: Meta<typeof List> = {
  title: 'Components/Data display/List/Unstyled list',
  component: List,

  args: {
    size: 'md',
    items: ['item 1', 'item 2', 'item 3'],
  },

  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: 'select',
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof List> = {};
