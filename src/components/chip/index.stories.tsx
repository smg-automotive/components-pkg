import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Chip from './index';

const meta: Meta<typeof Chip> = {
  title: 'Components/Data display/Chip',
  component: Chip,

  args: {
    children: 'Chip',
    variant: 'suggestion',
    size: 'md',
    isDisabled: false,
    isActive: false,
    onClick: action('onClick'),
  },

  argTypes: {
    variant: {
      options: ['suggestion', 'filter'],
      control: 'select',
    },

    size: {
      options: ['md'],
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
  },
};
export default meta;
type StoryType = StoryObj<typeof Chip>;

export const VariantSuggestion: StoryType = {
  name: 'Variant > Suggestion',
  args: {
    children: 'Suggestion Chip',
    variant: 'suggestion',
  },
};

export const VariantFilter: StoryType = {
  name: 'Variant > Filter',
  args: {
    children: 'Filter Chip',
    variant: 'filter',
    isActive: true,
  },
};

export const StateDisabled: StoryType = {
  name: 'State > Disabled',
  args: {
    isDisabled: true,
    children: 'Disabled Chip',
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
          variant="suggestion"
          isActive={activeChips.includes('option1')}
          onClick={() => toggleChip('option1')}
        >
          Suggestion chip
        </Chip>
        <Chip
          variant="filter"
          isActive={activeChips.includes('filter1')}
          onClick={() => toggleChip('filter1')}
        >
          Filter chip
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
