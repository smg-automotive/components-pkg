import { defineSlotRecipe } from '@chakra-ui/react';

const wordBreak = 'break-word';

export const vehicleReferenceRecipe = defineSlotRecipe({
  slots: ['carTitle', 'price', 'dealerName', 'dealerAddress'],
  base: {
    carTitle: {
      color: 'gray.900',
      textStyle: { '2xs': 'heading5', md: 'heading3' },
      lineClamp: { '2xs': 1, md: 'none' },
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
});
