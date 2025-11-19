import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Image } from '@chakra-ui/react';

import { Brand } from 'src/types/brand';

import { TopVehicleSharedBadge } from './index';

const meta: Meta<typeof TopVehicleSharedBadge> = {
  title: 'Components/Features/TopVehicleBadge',
  component: TopVehicleSharedBadge,
  decorators: [
    (Story) => (
      <Box w="full" maxW="7xl">
        <Story />
      </Box>
    ),
  ],

  args: {
    aspectRatio: 4 / 3,
    brand: Brand.AutoScout24,
    children: <Image src="https://picsum.photos/800/800" objectFit="cover" />,
  },

  argTypes: {
    aspectRatio: {
      control: 'number',
    },
    brand: {
      control: 'select',
      options: [Brand.AutoScout24, Brand.MotoScout24],
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof TopVehicleSharedBadge> = {};
