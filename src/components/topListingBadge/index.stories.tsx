import React from 'react';

import { Box, Image } from '@chakra-ui/react';

import TopListingBadgeComponent from './index';

const Template = (args) => (
  <Box maxW="400px">
    <TopListingBadgeComponent {...args}>
      <Image src="https://via.placeholder.com/800x800" objectFit="cover" />
    </TopListingBadgeComponent>
  </Box>
);

export default {
  title: 'Components/Features/TopListingBadge',
  component: TopListingBadgeComponent,

  args: {
    aspectRatio: 4 / 3,
  },

  argTypes: {
    aspectRatio: 'number',
  },
};

export const TopListingBadge = {
  render: Template.bind({}),
  name: 'TopListingBadge',
};
