import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../index';
import GridItem from './GridItem';

import GridComponent from './index';

const meta: Meta<typeof GridComponent> = {
  title: 'Layout/Grid',
  component: GridComponent,

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
    children: [
      <GridItem area="make" key="make">
        <Box border="1px solid purple" padding="md">
          make
        </Box>
      </GridItem>,
      <GridItem area="model" key="model">
        <Box border="1px solid purple" padding="md">
          model
        </Box>
      </GridItem>,
      <GridItem area="version" key="version">
        <Box border="1px solid purple" padding="md">
          version
        </Box>
      </GridItem>,
      <GridItem area="doors" key="doors">
        <Box border="1px solid purple" padding="md">
          doors
        </Box>
      </GridItem>,
      <GridItem area="horsePower" key="horsePower">
        <Box border="1px solid purple" padding="md">
          horsePower
        </Box>
      </GridItem>,
      <GridItem area="fuelType" key="fuelType">
        <Box border="1px solid purple" padding="md">
          fuelType
        </Box>
      </GridItem>,
      <GridItem area="driveType" key="driveType">
        <Box border="1px solid purple" padding="md">
          driveType
        </Box>
      </GridItem>,
    ],
  },

  argTypes: {
    gap: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],

      control: {
        type: 'select',
      },
    },
  },
};
export default meta;

export const Overview: StoryObj<typeof GridComponent> = {};
