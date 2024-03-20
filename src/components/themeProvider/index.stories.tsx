import { Box, Flex } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';

import ThemeProvider from './index.tsx';

const Template = (args) => {
  return (
    <ThemeProvider {...args}>
      <Flex direction="row" align="center" justify="space-between" maxW="170px">
        <Box
          bg="brand.100"
          h={50}
          w={50}
          mr={3}
          borderRadius={50}
          borderWidth={1}
          borderStyle="solid"
          borderColor="gray.500"
        />
        <Box w={100}>brand-100</Box>
      </Flex>
    </ThemeProvider>
  );
};

export default {
  title: 'Theme/Provider',
  component: ThemeProvider,

  args: {
    theme: Brand.AutoScout24,
  },

  argTypes: {
    theme: {
      options: [Brand.AutoScout24, Brand.MotoScout24],

      control: {
        type: 'select',
      },
    },
  },
};

export const AutoScout24 = {
  render: Template.bind({}),
  name: 'AutoScout24',

  args: {
    theme: Brand.AutoScout24,
  },
};

export const MotoScout24 = {
  render: Template.bind({}),
  name: 'MotoScout24',

  args: {
    theme: Brand.MotoScout24,
  },
};
