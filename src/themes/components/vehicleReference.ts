import { ComponentStyleConfig } from '@chakra-ui/react';

const parts = ['carTitle', 'price', 'dealerName', 'dealerAddress'];

const VehicleReference: ComponentStyleConfig = {
  parts,
  baseStyle: {
    carTitle: {
      color: 'gray.900',
      textStyle: { xxs: 'heading5', md: 'heading3' },
      noOfLines: { xxs: 1, md: 'none' },
      wordBreak: 'break-word',
    },
    price: {
      color: 'gray.900',
      textStyle: { xxs: 'heading3', md: 'heading1' },
    },
    dealerName: {
      color: 'gray.900',
      textStyle: 'heading4',
      display: { xxs: 'none', md: 'flex' },
      wordBreak: 'break-word',
    },
    dealerAddress: {
      color: 'gray.900',
      textStyle: 'body',
      display: { xxs: 'none', md: 'flex' },
      wordBreak: 'break-word',
    },
  },
};

export default VehicleReference;
