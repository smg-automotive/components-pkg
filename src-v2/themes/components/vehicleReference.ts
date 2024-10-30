import { ComponentStyleConfig } from '@chakra-ui/react';

const parts = ['carTitle', 'price', 'dealerName', 'dealerAddress'];
const wordBreak = 'break-word';

const VehicleReference: ComponentStyleConfig = {
  parts,
  baseStyle: {
    carTitle: {
      color: 'gray.900',
      textStyle: { '2xs': 'heading5', md: 'heading3' },
      noOfLines: { '2xs': 1, md: 'none' },
      wordBreak,
    },
    price: {
      color: 'gray.900',
      textStyle: { '2xs': 'heading3', md: 'heading2' },
    },
    dealerName: {
      color: 'gray.900',
      textStyle: 'heading4',
      display: { '2xs': 'none', md: 'flex' },
      wordBreak,
    },
    dealerAddress: {
      color: 'gray.900',
      textStyle: 'body',
      display: { '2xs': 'none', md: 'flex' },
      wordBreak,
    },
  },
};

export default VehicleReference;
