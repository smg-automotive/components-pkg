import { action } from '@storybook/addon-actions';

import { FilterHeading } from './Heading';

const Template = (args) => (
  <FilterHeading
    {...args}
    onClose={args.onClose ? action('onClose') : undefined}
    onResetFilter={action('onResetFilter')}
  />
);

export default {
  title: 'Patterns/Filter/Heading',
  component: FilterHeading,

  args: {
    language: 'de',
  },

  argTypes: {
    language: {
      options: ['de', 'fr', 'it', 'en'],
      control: 'select',
    },

    onResetFilter: {
      table: {
        disable: true,
      },
    },
  },
};

export const WithCloseButton = {
  render: Template.bind({}),
  name: 'With close button',

  args: {
    label: 'Treibstoff',
    onClose: true,
  },

  argTypes: {
    onClose: {
      table: {
        disable: true,
      },
    },
  },
};

export const WithoutCloseButton = {
  render: Template.bind({}),
  name: 'Without close button',

  args: {
    label: 'Treibstoff',
    onClose: false,
  },

  argTypes: {
    onClose: {
      table: {
        disable: true,
      },
    },
  },
};

export const Applied = {
  render: Template.bind({}),
  name: 'Applied',

  args: {
    label: 'Treibstoff',
    numberOfAppliedFilters: 5,
    isApplied: true,
    onClose: true,
  },

  argTypes: {
    isApplied: {
      table: {
        disable: true,
      },
    },

    onClose: {
      table: {
        disable: true,
      },
    },
  },
};
