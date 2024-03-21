import ListItem from './ListItem';

import List from './index';

const Template = (args) => (
  <List {...args}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
);

export default {
  title: 'Components/Data display/List/Unstyled list',
  component: List,

  parameters: {
    layout: 'fullscreen',
  },

  args: {
    size: 'md',
  },

  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: 'select',
    },
  },
};

export const UnstyledList = {
  render: Template.bind({}),
  name: 'Unstyled list',
};
