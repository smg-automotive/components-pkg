import { Meta, StoryObj } from '@storybook/react';

import { getRecipeControls } from '.storybook/preview/controls/recipe';

import { EnergyLabel } from './index';

const meta: Meta<typeof EnergyLabel> = {
  title: 'Components/Data display/Energy Label',
  component: EnergyLabel,

  args: {
    efficiency: 'A',
  },

  argTypes: {
    ...getRecipeControls('energyLabel'),
  },
};
export default meta;

type StoryType = StoryObj<typeof EnergyLabel>;
export const Overview: StoryType = {};

export const EfficiencyA: StoryType = {
  name: 'Efficiency > A',
  args: {
    efficiency: 'A',
  },
};

export const EfficiencyB: StoryType = {
  name: 'Efficiency > B',
  args: {
    efficiency: 'B',
  },
};

export const EfficiencyC: StoryType = {
  name: 'Efficiency > C',
  args: {
    efficiency: 'C',
  },
};

export const EfficiencyD: StoryType = {
  name: 'Efficiency > D',
  args: {
    efficiency: 'D',
  },
};

export const EfficiencyE: StoryType = {
  name: 'Efficiency > E',
  args: {
    efficiency: 'E',
  },
};

export const EfficiencyF: StoryType = {
  name: 'Efficiency > F',
  args: {
    efficiency: 'F',
  },
};

export const EfficiencyG: StoryType = {
  name: 'Efficiency > G',
  args: {
    efficiency: 'G',
  },
};
