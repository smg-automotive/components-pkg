import { Stack } from 'src/index.ts';

import EnergyLabel from './index.tsx';

const Template = (args) => <EnergyLabel {...args} />;

export default {
  title: 'Components/Data display/Energy Label',
  component: EnergyLabel,
};

export const Overview = {
  render: Template.bind({}),
  name: 'Overview',

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

  name: 'Variations',
};
