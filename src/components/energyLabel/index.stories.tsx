import React from 'react';
import { Meta } from '@storybook/react';

import { Stack } from 'src/index';

import EnergyLabel from './index';

const meta: Meta<typeof EnergyLabel> = {
  title: 'Components/Data display/Energy Label',
  component: EnergyLabel,
};

export const Overview = {
  args: {
    efficiency: 'A',
  },

  argTypes: {
    efficiency: {
      options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      control: 'select',
    },
  },
};

export const Variations = {
  render: () => (
    <Stack spacing="lg" direction="row">
      <EnergyLabel efficiency="A" />
      <EnergyLabel efficiency="B" />
      <EnergyLabel efficiency="C" />
      <EnergyLabel efficiency="D" />
      <EnergyLabel efficiency="E" />
      <EnergyLabel efficiency="F" />
      <EnergyLabel efficiency="G" />
    </Stack>
  ),
};

export default meta;
