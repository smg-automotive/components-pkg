import React from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Text from 'src/components/text';
import { ChevronLeftSmallIcon, FlashIcon } from 'src/components/icons';
import Flex from 'src/components/flex';
import CheckboxFilter from 'src/components/checkboxFilter';
import Box from 'src/components/box';

import { PopoverFilterProps } from './props';

import { PopoverFilter } from './index';

const Template = (args: PopoverFilterProps) => (
  <Box w={{ base: 'full', sm: '250px' }} h="400px">
    <PopoverFilter
      {...args}
      onPopoverOpen={action('onPopoverOpen')}
      onPopoverClose={action('onPopoverClose')}
      onResetFilter={action('onResetFilter')}
    >
      <CheckboxFilter
        items={[
          { label: 'Benzin', key: 'petrol', facet: 20, isChecked: true },
          { label: 'Diesel', key: 'diesel', facet: 17, isChecked: true },
          { label: 'Elektro', key: 'electric', facet: 4, isChecked: false },
          { label: 'Hybrid', key: 'hybrid', facet: 0, isChecked: false },
          {
            label: 'CNG Benzin',
            key: 'cng-petrol',
            facet: 20,
            isChecked: false,
          },
          {
            label: 'HEV Benzin',
            key: 'hev-petrol',
            facet: 10,
            isChecked: false,
          },
          {
            label: 'LPG Benzin',
            key: 'lpg-petrol',
            facet: 10,
            isChecked: true,
          },
          {
            label: 'PHEV Benzin',
            key: 'phev-petrol',
            facet: 0,
            isChecked: false,
          },
          {
            label: 'Wasserstoff',
            key: 'hydrogen',
            facet: 0,
            isChecked: false,
          },
        ]}
        onApply={() => null}
        language="de"
      />
    </PopoverFilter>
  </Box>
);

const CustomHeader = () => (
  <Flex justifyContent="center" alignItems="center" width="full">
    <ChevronLeftSmallIcon color="blue.700" />
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="full"
    >
      <Text textStyle="body-small" color="gray.500">
        VW
      </Text>
      <Text textStyle="heading3">Modell auswählen</Text>
    </Flex>
  </Flex>
);

const meta: Meta<typeof PopoverFilter> = {
  title: 'Patterns/Filter/Popover',
  component: PopoverFilter,

  args: {
    language: 'de',
    enforceHeight: true,
    label: 'Treibstoff',
    initialPopoverState: 'closed',
    displayValue: 'Benzin, Diesel, Elektro, Hybrid, Plug-In',
    numberOfAppliedFilters: 5,
    isApplied: false,

    actionButton: {
      label: '12324 Fahrzeuge',
      onClick: action('actionButton - onClick'),
    },
  },

  argTypes: {
    language: {
      options: ['de', 'fr', 'it', 'en'],
      control: 'select',
    },

    children: {
      table: {
        disable: true,
      },
    },

    initialPopoverState: {
      options: ['open', 'closed'],
      control: 'select',
    },
  },
};

export const DefaultEmpty = {
  render: Template.bind({}),
  name: 'Default empty',

  args: {
    displayValue: '',
  },

  argTypes: {
    actionButton: {
      table: {
        disable: true,
      },
    },
  },
};

export const DefaultInitiallyOpen = {
  render: Template.bind({}),
  name: 'Default initially open',

  args: {
    label: 'Treibstoff',
    initialPopoverState: 'open',
    displayValue: '',
  },

  argTypes: {
    actionButton: {
      table: {
        disable: true,
      },
    },
  },
};

export const AppliedWithDisplayValue = {
  render: Template.bind({}),
  name: 'Applied with display value',

  args: {
    isApplied: true,
  },

  argTypes: {
    isApplied: {
      table: {
        disable: true,
      },
    },
  },
};

export const AppliedWithoutDisplayValue = {
  render: Template.bind({}),
  name: 'Applied without display value',

  args: {
    displayValue: '',
    isApplied: true,
  },

  argTypes: {
    isApplied: {
      table: {
        disable: true,
      },
    },
  },
};

export const WithoutCallToActionButton = {
  render: Template.bind({}),
  name: 'Without call-to-action button',

  args: {
    displayValue: '',
    showCallToActionButton: false,
  },
};

export const WithCustomHeader = {
  render: Template.bind({}),
  name: 'With custom header',

  args: {
    displayValue: '',
    header: <CustomHeader />,
  },
};

export const WithIcon = {
  render: Template.bind({}),
  name: 'With icon',

  args: {
    displayValue: '',
    Icon: FlashIcon,
  },
};

export default meta;
