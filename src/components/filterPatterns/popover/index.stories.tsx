import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Text from 'src/components/text';
import { ChevronLeftSmallIcon, FlashIcon } from 'src/components/icons';
import Flex from 'src/components/flex';
import CheckboxFilter from 'src/components/checkboxFilter';
import Box from 'src/components/box';

import { PopoverFilter } from './index';

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

  decorators: [
    (Story) => (
      <Box w={{ base: 'full', sm: '250px' }} h="400px">
        <Story />
      </Box>
    ),
  ],

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
    onPopoverOpen: action('onPopoverOpen'),
    onPopoverClose: action('onPopoverClose'),
    onResetFilter: action('onResetFilter'),
    children: (
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
    ),
  },

  argTypes: {
    language: {
      control: 'select',
    },

    initialPopoverState: {
      control: 'select',
    },

    triggerHeight: {
      control: 'select',
    },

    actionButton: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof PopoverFilter>;
export const DefaultEmpty: StoryType = {
  name: 'Default empty',

  args: {
    displayValue: '',
  },
};

export const DefaultInitiallyOpen: StoryType = {
  name: 'Default initially open',

  args: {
    initialPopoverState: 'open',
    displayValue: '',
  },
};

export const AppliedWithDisplayValue: StoryType = {
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

export const AppliedWithoutDisplayValue: StoryType = {
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

export const WithoutCallToActionButton: StoryType = {
  name: 'Without call-to-action button',

  args: {
    displayValue: '',
    showCallToActionButton: false,
  },
};

export const WithCustomHeader: StoryType = {
  name: 'With custom header',

  args: {
    displayValue: '',
    header: <CustomHeader />,
  },
};

export const WithIcon: StoryType = {
  name: 'With icon',

  args: {
    displayValue: '',
    Icon: FlashIcon,
  },
};
