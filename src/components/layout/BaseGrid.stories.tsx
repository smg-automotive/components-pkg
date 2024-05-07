import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
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

  args: {
    gridTemplateRows: {
      '2xs': 'repeat(12, 1fr)',
      md: '1fr',
    },
    height: 'full',
    bg: 'red.200',

    children: Array.from({ length: 12 }).map((_, index) => (
      <GridItem key={index}>
        <Box bg="blue.200" h="100%">
          {index + 1}
        </Box>
      </GridItem>
    )),
  },
};

export default meta;

/**
 * Base grid for XL layouts
 **/
export const Overview: StoryObj<typeof BaseGridComponent> = {};
