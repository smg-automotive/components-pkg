import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Controls,
  Description,
  Primary,
  Subtitle,
  Title,
} from '@storybook/blocks';
import { Box, Flex } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';

import ThemeProvider from './index';

const meta: Meta<typeof ThemeProvider> = {
  title: 'Foundations/Providers/Theme',
  component: ThemeProvider,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
        </>
      ),
    },
  },

  args: {
    theme: Brand.AutoScout24,
    children: (
      <Flex direction="row" align="center" justify="space-between" maxW="170px">
        <Box bgColor="brand.primary" h={50} w={50} mr={3} borderRadius={50} />
        <Box w={100}>brand-primary</Box>
      </Flex>
    ),
  },

  argTypes: {
    theme: {
      options: [Brand.AutoScout24, Brand.MotoScout24],

      control: {
        type: 'select',
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof ThemeProvider>;
export const AutoScout24: StoryType = {
  name: 'AutoScout24',

  args: {
    theme: Brand.AutoScout24,
  },
};

export const MotoScout24: StoryType = {
  name: 'MotoScout24',

  args: {
    theme: Brand.MotoScout24,
  },
};
