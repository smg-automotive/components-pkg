import { defineSlotRecipe } from '@chakra-ui/react';

export const progressSlotRecipe = defineSlotRecipe({
  className: 'chakra-progress',
  slots: ['root', 'track', 'range', 'label', 'valueText'],
  base: {
    track: {
      height: 'xxs',
      bg: 'gray.50',
      borderRadius: 'lg',
      overflow: 'hidden',
    },
    range: {
      height: 'full',
      bg: 'gray.900',
      borderRadius: 'lg',
    },
  },
});
