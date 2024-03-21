import Box from '../box';

import Flex from './index';

const Template = (args) => (
  <Flex {...args}>
    <Box p="4" bg="green.200" margin="5px">
      Element 1
    </Box>
    <Box p="4" bg="orange.300" margin="5px">
      Element 2
    </Box>
  </Flex>
);

const justify = {
  options: ['start', 'center', 'space-between', 'space-around', 'space-evenly'],
  control: 'select',
};

const align = {
  options: ['stretch', 'center', 'start', 'end'],
  control: 'select',
};

export default {
  title: 'Layout/Flex',
  component: Flex,
};

export const Row = {
  render: Template.bind({}),
  name: 'Row',

  argTypes: {
    justify,
  },
};

export const Column = {
  render: Template.bind({}),
  name: 'Column',

  args: {
    direction: 'column',
  },

  argTypes: {
    align,
  },
};
