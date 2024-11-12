import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Text from 'src/components/text';
import { ChevronLeftSmallIcon, FlashIcon } from 'src/components/icons';
import Flex from 'src/components/flex';
import CheckboxFilter from 'src/components/checkboxFilter';
import Box from 'src/components/box';

import { ModalFilter } from './index';

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

const meta: Meta<typeof ModalFilter> = {
  title: 'Patterns/Filter/Modal',
  component: ModalFilter,
  decorators: [
    (Story) => (
      <Box w="300px">
        <Story />
      </Box>
    ),
  ],

  args: {
    language: 'de',

    actionButton: {
      label: '12324 Fahrzeuge',
      onClick: action('actionButton - onClick'),
    },

    label: 'Treibstoff',
    displayValue: 'Benzin, Diesel, Elektro, Hybrid, Plug-In',
    numberOfAppliedFilters: 5,
    showCallToActionButton: true,
    isApplied: false,
    isDisabled: false,
    onModalOpen: action('onModalOpen'),
    onModalClose: action('onModalClose'),
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
        ]}
        onApply={() => null}
        language="de"
      />
    ),
  },

  argTypes: {
    language: {
      options: ['de', 'fr', 'it', 'en'],
      control: 'select',
    },
    initialModalState: {
      control: 'select',
    },
    paddingX: {
      control: 'select',
    },
  },

  parameters: {
    layout: 'centered',
  },
};
export default meta;

type StoryType = StoryObj<typeof ModalFilter>;
export const DefaultEmpty: StoryType = {
  name: 'Default empty',

  argTypes: {
    actionButton: {
      table: {
        disable: true,
      },
    },
  },
};

export const Applied: StoryType = {
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

export const WithoutCallToActionButton: StoryType = {
  name: 'Without call-to-action button',

  args: {
    showCallToActionButton: false,
  },
};

export const WithCustomHeader: StoryType = {
  name: 'With custom header',

  args: {
    header: <CustomHeader />,
  },
};

export const WithIcon: StoryType = {
  name: 'With icon',

  args: {
    Icon: FlashIcon,
  },
};

export const WithDifferentBackgroundColor: StoryType = {
  name: 'With different background color',
  args: {
    backgroundColor: 'gray.100',
    paddingX: 'md',
  },
};
