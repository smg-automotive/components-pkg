import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { iconControl } from 'src/storybook/ControlTypes';
import { CheckmarkIcon, MagnifierIcon, StarIcon } from 'src';

import Chip from './index';

const meta: Meta<typeof Chip> = {
  title: 'Components/Data display/Chip',
  component: Chip,

  args: {
    children: 'Chip',
    variant: 'choice',
    size: 'md',
    isDisabled: false,
    isActive: false,
    onClick: action('onClick'),
  },

  argTypes: {
    variant: {
      options: ['choice', 'filter'],
      control: 'select',
    },

    size: {
      options: ['sm', 'md'],
      control: 'select',
    },

    children: {
      control: 'text',
    },

    isDisabled: {
      control: 'boolean',
    },

    isActive: {
      control: 'boolean',
    },

    leftIcon: iconControl,
  },
};
export default meta;
type StoryType = StoryObj<typeof Chip>;

export const Overview: StoryType = {};

export const VariantChoice: StoryType = {
  name: 'Variant > Choice',
  args: {
    children: 'Choice Chip',
    variant: 'choice',
  },
};

export const VariantFilter: StoryType = {
  name: 'Variant > Filter',
  args: {
    children: 'Filter Chip',
    variant: 'filter',
  },
};

export const SizeSmall: StoryType = {
  name: 'Size > Small',
  args: {
    size: 'sm',
    children: 'Small Chip',
  },
};

export const SizeMedium: StoryType = {
  name: 'Size > Medium',
  args: {
    size: 'md',
    children: 'Medium Chip',
  },
};

export const StateActive: StoryType = {
  name: 'State > Active',
  args: {
    isActive: true,
    children: 'Active Chip',
  },
};

export const StateActiveTypeFilter: StoryType = {
  name: 'State > Active Type Filter',
  args: {
    isActive: true,
    children: 'Active Chip',
    variant: 'filter',
  },
};

export const StateDisabled: StoryType = {
  name: 'State > Disabled',
  args: {
    isDisabled: true,
    children: 'Disabled Chip',
  },
};

export const WithLeftIcon: StoryType = {
  name: 'With Left Icon',
  args: {
    leftIcon: <CheckmarkIcon height={16} width={16} />,
    children: 'With Icon',
  },
};

export const FilterWithIcon: StoryType = {
  name: 'Filter with Icon',
  args: {
    variant: 'filter',
    leftIcon: <MagnifierIcon height={16} width={16} />,
    children: 'Filter Options',
  },
};

export const ActiveWithIcon: StoryType = {
  name: 'Active with Icon',
  args: {
    isActive: true,
    leftIcon: <StarIcon height={16} width={16} />,
    children: 'Favorite',
  },
};

export const SmallChipNoIcon: StoryType = {
  name: 'Small Chip (No Icon)',
  args: {
    size: 'sm',
    leftIcon: <CheckmarkIcon height={16} width={16} />,
    children: 'Small chip ignores icons',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small chips do not display the leftIcon, even when provided.',
      },
    },
  },
};

export const InteractiveExample: StoryType = {
  name: 'Interactive Example',
  render: function InteractiveChipsExample() {
    const [activeChips, setActiveChips] = React.useState<string[]>([]);

    const toggleChip = (chipId: string) => {
      setActiveChips((prev) =>
        prev.includes(chipId)
          ? prev.filter((id) => id !== chipId)
          : [...prev, chipId],
      );
    };

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Chip
          variant="choice"
          isActive={activeChips.includes('option1')}
          onClick={() => toggleChip('option1')}
        >
          Option 1
        </Chip>
        <Chip
          variant="choice"
          isActive={activeChips.includes('option2')}
          onClick={() => toggleChip('option2')}
        >
          Option 2
        </Chip>
        <Chip
          variant="filter"
          leftIcon={<MagnifierIcon height={16} width={16} />}
          isActive={activeChips.includes('filter1')}
          onClick={() => toggleChip('filter1')}
        >
          Filter
        </Chip>
        <Chip
          variant="filter"
          leftIcon={<StarIcon height={16} width={16} />}
          isActive={activeChips.includes('favorites')}
          onClick={() => toggleChip('favorites')}
        >
          Favorites
        </Chip>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Click the chips to see them toggle between active and inactive states.',
      },
    },
  },
};
