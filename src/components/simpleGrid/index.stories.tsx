import { Box } from '@chakra-ui/react';

import SimpleGrid from './index';

const Template = ({ maxW, ...args }) => {
  return (
    <Box w="100%" maxW={maxW}>
      <SimpleGrid {...args}>
        <Box h="50px" bg="blue.100">
          1
        </Box>
        <Box h="50px" bg="green.100">
          2
        </Box>
        <Box h="50px" bg="orange.100">
          3
        </Box>
        <Box h="50px" bg="blue.200">
          4
        </Box>
        <Box h="50px" bg="green.200">
          5
        </Box>
        <Box h="50px" bg="orange.300">
          6
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default {
  title: 'Layout/SimpleGrid',
  component: SimpleGrid,

  parameters: {
    controls: {
      sort: 'alpha',
    },
  },

  args: {
    columns: 3,
    spacing: 'md',
  },

  argTypes: {
    spacing: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],

      control: {
        type: 'select',
      },
    },

    spacingY: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],

      control: {
        type: 'select',
      },
    },

    spacingX: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],

      control: {
        type: 'select',
      },
    },

    maxW: {
      table: {
        disable: true,
      },
    },
  },
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',

  args: {
    maxW: '300px',
  },
};

export const Responsive = {
  render: Template.bind({}),
  name: 'Responsive',

  args: {
    columns: {
      '2xs': 2,
      sm: 3,
    },
  },
};

export const AutoResponsive = {
  render: Template.bind({}),
  name: 'Auto-responsive',

  args: {
    columns: undefined,
    minChildWidth: '200px',
  },
};
