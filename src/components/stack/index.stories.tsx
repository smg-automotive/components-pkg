import { Box } from '@chakra-ui/react';

import Stack from './index.tsx';

const Template = (args) => {
  return (
    <Stack {...args}>
      <Box w="40px" h="40px" bg="blue.100">
        1
      </Box>
      <Box w="50px" h="50px" bg="green.100">
        2
      </Box>
      <Box w="60px" h="60px" bg="orange.100">
        3
      </Box>
    </Stack>
  );
};

export default {
  title: 'Layout/Stack',
  component: Stack,

  parameters: {
    controls: {
      sort: 'alpha',
    },
  },

  args: {
    align: 'center',
    direction: 'row',
    spacing: 'md',
    wrap: true,
  },

  argTypes: {
    align: {
      options: ['start', 'center', 'end'],

      control: {
        type: 'select',
      },
    },

    direction: {
      options: ['row', 'column'],

      control: {
        type: 'select',
      },
    },

    justify: {
      options: [
        'start',
        'space-around',
        'space-between',
        'space-evenly',
        'center',
        'end',
      ],

      control: {
        type: 'select',
      },
    },

    spacing: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],

      control: {
        type: 'select',
      },
    },
  },
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',
};

export const Responsive = {
  render: Template.bind({}),
  name: 'Responsive',

  args: {
    direction: {
      '2xs': 'column',
      sm: 'row',
    },
  },

  argTypes: {
    direction: {
      table: {
        disable: true,
      },
    },
  },
};
