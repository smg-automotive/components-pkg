import React from 'react';
import { Box } from '@chakra-ui/react';

import FullHeightComponent from './index';

const Template = () => {
  return (
    <FullHeightComponent>
      <Box backgroundColor="brand.primary" minHeight="100vh">
        I am full height container
      </Box>
    </FullHeightComponent>
  );
};

export default {
  title: 'Layout/Full Height',
  component: FullHeightComponent,

  parameters: {
    layout: 'fullscreen',
  },
};

export const FullHeight = {
  render: Template.bind({}),
  name: 'Full Height',
};
