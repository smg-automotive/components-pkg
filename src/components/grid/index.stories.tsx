import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from 'src';

import { Grid, GridItem } from './index';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,

  args: {
    templateAreas: {
      base: `
        "make model"
        "version version"
        "doors horsePower"
        "fuelType driveType"
      `,

      md: `
        "make model version version"
        "doors horsePower fuelType driveType"
      `,
    },

    gap: 'md',

    templateColumns: {
      base: 'repeat(2, 1fr)',
      md: 'repeat(4, 1fr)',
    },
    children: 'children',
  },

  argTypes: {
    children: {
      table: {
        disable: true,
      },
      mapping: {
        children: [
          <GridItem area="make" key="make" asChild>
            <Box border="1px" borderColor="violet.500" padding="md">
              make
            </Box>
          </GridItem>,
          <GridItem area="model" key="model" asChild>
            <Box border="1px" borderColor="violet.500" padding="md">
              model
            </Box>
          </GridItem>,
          <GridItem area="version" key="version" asChild>
            <Box border="1px" borderColor="violet.500" padding="md">
              version
            </Box>
          </GridItem>,
          <GridItem area="doors" key="doors" asChild>
            <Box border="1px" borderColor="violet.500" padding="md">
              doors
            </Box>
          </GridItem>,
          <GridItem area="horsePower" key="horsePower" asChild>
            <Box border="1px" borderColor="violet.500" padding="md">
              horsePower
            </Box>
          </GridItem>,
          <GridItem area="fuelType" key="fuelType" asChild>
            <Box border="1px" borderColor="violet.500" padding="md">
              fuelType
            </Box>
          </GridItem>,
          <GridItem area="driveType" key="driveType" asChild>
            <Box border="1px" borderColor="violet.500" padding="md">
              driveType
            </Box>
          </GridItem>,
        ],
      },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof Grid> = {};
