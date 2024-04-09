import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Image } from '@chakra-ui/react';

import TopVehicleBadgeComponent from './index';

const meta: Meta<typeof TopVehicleBadgeComponent> = {
  title: 'Components/Features/TopVehicleBadge',
  component: TopVehicleBadgeComponent,
  decorators: [
    (Story) => (
      <Box w="100%" maxW="400px">
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

export const Overview: StoryObj<typeof TopVehicleBadgeComponent> = {};
