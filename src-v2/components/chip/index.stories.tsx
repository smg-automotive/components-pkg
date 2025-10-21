import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Chip from './index';

const meta: Meta<typeof Chip> = {
  title: 'Components/Data display/Chip',
  component: Chip,

  args: {
    children: 'Chip',
    isDisabled: false,
    isActive: false,
    onClick: action('onClick'),
  },

  argTypes: {
    children: {
      control: 'text',
    },

    isDisabled: {
      control: 'boolean',
    },

    isActive: {
      control: 'boolean',
    },

    href: {
      control: 'text',
    },
  },
};
export default meta;
type StoryType = StoryObj<typeof Chip>;

export const Default: StoryType = {
  name: 'Default',
  args: {
    children: 'Default Chip',
    isActive: false,
  },
};

export const Active: StoryType = {
  name: 'Active',
  args: {
    children: 'Active Chip',
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

export const AsLink: StoryType = {
  name: 'As Link',
  args: {
    children: 'Link Chip',
    href: 'https://example.com',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Chip can be used as a link by providing an href prop. It will render as an anchor tag.',
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
        <Chip onClick={() => toggleChip('option1')}>Suggestion chip</Chip>
        <Chip
          isActive={activeChips.includes('option2')}
          onClick={() => toggleChip('option2')}
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
          'Click the chips to see them toggle between active and inactive states. The last two chips are links.',
      },
    },
  },
};
