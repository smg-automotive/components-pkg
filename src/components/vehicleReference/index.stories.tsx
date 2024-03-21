import { Box } from '@chakra-ui/react';

import VehicleReference from './index.tsx';

const Template = (args) => (
  <Box maxW={{ '2xs': '100%', md: '450px' }}>
    <VehicleReference {...args} />
  </Box>
);

export default {
  title: 'Patterns/Data display/Vehicle reference',
  component: VehicleReference,

  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
  },
};

export const VehicleReferenceWithImage = {
  render: Template.bind({}),
  name: 'Vehicle reference with image',

  args: {
    vehicleTitle: 'AUDI A5 Sportback 3.0 TDI quattro S-tronic (Limousine)',
    price: `CHF 23'900.–`,
    sellerName: `Auto-Center Grenchen AG 2540 Grenchen (SO)`,
    sellerAddress: `2540 Grenchen (SO)`,
    image: <img src="https://via.placeholder.com/400x400" />,
  },
};

export const VehicleReferenceMissingImage = {
  render: Template.bind({}),
  name: 'Vehicle reference missing image',

  args: {
    vehicleTitle: 'AUDI A5 Sportback 3.0 TDI quattro S-tronic (Limousine)',
    price: `CHF 23'900.–`,
    sellerName: `Auto-Center Grenchen AG 2540 Grenchen (SO)`,
    sellerAddress: `2540 Grenchen (SO)`,
  },
};

export const VehicleReferenceWithMinimalProps = {
  render: Template.bind({}),
  name: 'Vehicle reference with minimal props',

  args: {
    vehicleTitle: 'AUDI',
  },
};
