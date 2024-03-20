import React from 'react';

import { Box, GridItem } from '@chakra-ui/react';

import { FullHeight } from '../index';
import BaseGridComponent from './BaseGrid';

const Template = () => (
  <FullHeight>
    <Box bg="green.100" height="full">
      <BaseGridComponent
        gridTemplateRows={{
          '2xs': 'repeat(12, 1fr)',
          md: '1fr',
        }}
        height="full"
        bg="red.200"
      >
        {new Array(12).fill('column').map((item, index) => (
          <GridItem key={index}>
            <Box bg="blue.200" h="100%">
              {index + 1}
            </Box>
          </GridItem>
        ))}
      </BaseGridComponent>
    </Box>
  </FullHeight>
);

export default {
  title: 'Layout/Pages/Base grid',
  component: BaseGridComponent,

  parameters: {
    layout: 'fullscreen',
  },
};

export const BaseGrid = {
  render: Template.bind({}),
  name: 'Base grid',
};
