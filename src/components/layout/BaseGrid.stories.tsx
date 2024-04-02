import React from 'react';
import { Meta } from '@storybook/react';
import { Description, Stories, Subtitle, Title } from '@storybook/blocks';
import { Box, GridItem } from '@chakra-ui/react';

import { FullHeight } from '../index';
import BaseGridComponent from './BaseGrid';

const meta: Meta<typeof BaseGridComponent> = {
  title: 'Layout/Pages/Base grid',
  component: BaseGridComponent,
  decorators: [
    (Story) => (
      <FullHeight>
        <Box bg="green.100" height="full">
          <Story />
        </Box>
      </FullHeight>
    ),
  ],

  parameters: {
    layout: 'fullscreen',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories />
        </>
      ),
    },
  },

  render: () => (
    <BaseGridComponent
      gridTemplateRows={{
        '2xs': 'repeat(12, 1fr)',
        md: '1fr',
      }}
      height="full"
      bg="red.200"
    >
      {new Array(12).fill('column').map((_, index) => (
        <GridItem key={index}>
          <Box bg="blue.200" h="100%">
            {index + 1}
          </Box>
        </GridItem>
      ))}
    </BaseGridComponent>
  ),
};

export default meta;

/**
 * Base grid for XL layouts
 **/
export const BaseGrid = {};
