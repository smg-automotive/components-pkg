import { action } from '@storybook/addon-actions';

import Text from 'src/components/text';
import { ChevronLeftSmallIcon, FlashIcon } from 'src/components/icons';
import Flex from 'src/components/flex';
import CheckboxFilter from 'src/components/checkboxFilter';
import Box from 'src/components/box';

import { ModalFilter } from './index';

const Template = (args) => (
  <Box paddingX="lg">
    <ModalFilter
      {...args}
      onModalOpen={action('onModalOpen')}
      onModalClose={action('onModalClose')}
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
        ]}
        onApply={() => null}
        language="de"
      />
    </ModalFilter>
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

export default {
  title: 'Patterns/Filter/Modal',
  component: ModalFilter,

  args: {
    language: 'de',

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
  },

  parameters: {
    layout: 'fullscreen',
  },
};

export const DefaultEmpty = {
  render: Template.bind({}),
  name: 'Default empty',

  args: {
    label: 'Treibstoff',
  },

  argTypes: {
    actionButton: {
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
    displayValue: 'Benzin, Diesel, Elektro, Hybrid, Plug-In',
    numberOfAppliedFilters: 5,
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
    label: 'Treibstoff',
    displayValue: 'Benzin, Diesel, Elektro, Hybrid, Plug-In',
    numberOfAppliedFilters: 5,
    showCallToActionButton: false,
  },
};

export const WithCustomHeader = {
  render: Template.bind({}),
  name: 'With custom header',

  args: {
    label: 'Treibstoff',
    displayValue: 'Benzin, Diesel, Elektro, Hybrid, Plug-In',
    numberOfAppliedFilters: 5,
    showCallToActionButton: false,
    header: <CustomHeader />,
  },
};

export const WithIcon = {
  render: Template.bind({}),
  name: 'With icon',

  args: {
    label: 'Treibstoff',
    displayValue: 'Benzin, Diesel, Elektro, Hybrid, Plug-In',
    numberOfAppliedFilters: 5,
    Icon: FlashIcon,
  },
};
