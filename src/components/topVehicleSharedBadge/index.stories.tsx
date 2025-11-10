import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Image } from '@chakra-ui/react';

import {TopVehicleSharedBadge} from './index';

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
    children: <Image src="https://picsum.photos/800/800" objectFit="cover" />,
  },

  argTypes: {
    aspectRatio: {
      control: 'number',
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
