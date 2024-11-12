import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';

import { Button } from '../index';

import VehicleReference from './index';

const meta: Meta<typeof VehicleReference> = {
  title: 'Patterns/Data display/Vehicle reference',
  component: VehicleReference,
  decorators: [
    (Story) => (
      <Box maxW={{ '2xs': '100%', md: '600px' }}>
        <Story />
      </Box>
    ),
  ],

  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
    callToAction: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type StoryType = StoryObj<typeof VehicleReference>;
export const VehicleReferenceWithImage: StoryType = {
  name: 'Vehicle reference with image',

  args: {
    vehicleTitle: 'AUDI A5 Sportback 3.0 TDI quattro S-tronic (Limousine)',
    price: `CHF 23'900.–`,
    sellerName: `Auto-Center Grenchen AG 2540 Grenchen (SO)`,
    sellerAddress: `2540 Grenchen (SO)`,
    image: <img src="https://picsum.photos/400/400" alt="400x400" />,
  },
};

export const VehicleReferenceWithImageAsRow: StoryType = {
  name: 'Vehicle reference with image as row',

  args: {
    vehicleTitle: 'BMW M5 Competition',
    price: `CHF 23'900.–`,
    sellerName: `Auto-Center Grenchen AG 2540 Grenchen (SO)`,
    sellerAddress: `2540 Grenchen (SO)`,
    image: <img src="https://picsum.photos/400/400" alt="400x400" />,
    templateColumns: {
      base: 'var(--chakra-sizes-2xl) 1fr',
      md: '200px 1fr',
    },
  },
};

export const VehicleReferenceWithImageAndCallToAction: StoryType = {
  name: 'Vehicle reference with image and call to action',

  args: {
    vehicleTitle: 'BMW M5 Competition',
    price: `CHF 23'900.–`,
    sellerName: `Auto-Center Grenchen AG 2540 Grenchen (SO)`,
    sellerAddress: `2540 Grenchen (SO)`,
    image: <img src="https://picsum.photos/400/400" alt="400x400" />,
    callToAction: (
      <Button variant="secondary" width="full" onClick={() => null}>
        Press me!
      </Button>
    ),
  },
};

export const VehicleReferenceMissingImage: StoryType = {
  name: 'Vehicle reference missing image',

  args: {
    vehicleTitle: 'AUDI A5 Sportback 3.0 TDI quattro S-tronic (Limousine)',
    price: `CHF 23'900.–`,
    sellerName: `Auto-Center Grenchen AG 2540 Grenchen (SO)`,
    sellerAddress: `2540 Grenchen (SO)`,
  },
};

export const VehicleReferenceWithMinimalProps: StoryType = {
  name: 'Vehicle reference with minimal props',

  args: {
    vehicleTitle: 'AUDI',
  },
};
