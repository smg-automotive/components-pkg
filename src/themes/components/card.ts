import { ComponentStyleConfig } from '@chakra-ui/react';

const parts = ['carTitle', 'price', 'dealerName', 'dealerAddress'];

const Card: ComponentStyleConfig = {
  parts,
  baseStyle: {
    carTitle: {
      color: 'gray.900',
      textStyle: { xs: 'heading5', lg: 'heading3' },
      noOfLines: { xs: 1, lg: 'none' },
    },
    price: {
      color: 'gray.900',
      textStyle: { xs: 'heading3', lg: 'lg' },
    },
    dealerName: {
      color: 'gray.900',
      textStyle: 'heading4',
      display: { xs: 'none', lg: 'flex' },
    },
    dealerAddress: {
      color: 'gray.900',
      textStyle: 'body',
      display: { xs: 'none', lg: 'flex' },
    },
  },
};

export default Card;
