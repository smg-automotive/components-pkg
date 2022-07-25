import { ComponentStyleConfig } from '@chakra-ui/react';

const parts = ['carTitle', 'price', 'dealerName', 'dealerAddress'];

const Card: ComponentStyleConfig = {
  parts,
  baseStyle: {
    carTitle: {
      color: 'gray.900',
      textStyle: { xs: 'heading5', lg: 'heading3' },
      width: '250px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
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
