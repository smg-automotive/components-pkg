import React from 'react';
import { Box, Image } from '@chakra-ui/react';

import TopVehicleBadgeComponent from './index';

const Template = (args) => (
  <Box maxW="400px">
    <TopVehicleBadgeComponent {...args}>
      <Image src="https://via.placeholder.com/800x800" objectFit="cover" />
    </TopVehicleBadgeComponent>
  </Box>
);

export default {
  title: 'Components/Features/TopVehicleBadge',
  component: TopVehicleBadgeComponent,

  args: {
    aspectRatio: 4 / 3,
  },

  argTypes: {
    aspectRatio: 'number',
  },
};

export const TopVehicleBadge = {
  render: Template.bind({}),
  name: 'TopVehicleBadge',
};
