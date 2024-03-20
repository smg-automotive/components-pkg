import React from 'react';

import { Box } from '../index';
import GridItem from './GridItem';

import GridComponent from './index';

const Template = ({ ...args }) => {
  return (
    <GridComponent {...args}>
      <GridItem area="make">
        <Box border="1px solid purple" padding="md">
          make
        </Box>
      </GridItem>
      <GridItem area="model">
        <Box border="1px solid purple" padding="md">
          model
        </Box>
      </GridItem>
      <GridItem area="version">
        <Box border="1px solid purple" padding="md">
          version
        </Box>
      </GridItem>
      <GridItem area="doors">
        <Box border="1px solid purple" padding="md">
          doors
        </Box>
      </GridItem>
      <GridItem area="horsePower">
        <Box border="1px solid purple" padding="md">
          horsePower
        </Box>
      </GridItem>
      <GridItem area="fuelType">
        <Box border="1px solid purple" padding="md">
          fuelType
        </Box>
      </GridItem>
      <GridItem area="driveType">
        <Box border="1px solid purple" padding="md">
          driveType
        </Box>
      </GridItem>
    </GridComponent>
  );
};

export default {
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

export const Grid = {
  render: Template.bind({}),
  name: 'Grid',
};
