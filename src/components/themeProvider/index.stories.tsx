import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Controls,
  Description,
  Primary,
  Subtitle,
  Title,
} from '@storybook/blocks';
import { Box } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';

import { ThemeProvider } from './index';

const meta: Meta<typeof ThemeProvider> = {
  title: 'Foundations/Theme/Provider',
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
    children: 'box',
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
      mapping: {
        box: (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="start"
            maxW="5xl"
          >
            <Box
              bgColor="brand.primary"
              h="lg"
              w="lg"
              mr="lg"
              borderRadius="full"
            />
            brand-primary
          </Box>
        ),
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
