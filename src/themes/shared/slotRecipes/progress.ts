import { defineSlotRecipe } from '@chakra-ui/react';

export const progressSlotRecipe = defineSlotRecipe({
  className: 'chakra-progress',
  slots: ['root', 'track', 'range', 'label', 'valueText'],
  base: {
    track: {
      height: '0.5rem',
      bg: 'gray.50',
      borderRadius: 'lg',
      overflow: 'hidden',
    },
    range: {
      height: '100%',
      bg: 'gray.900',
      borderRadius: 'lg',
    },
  },
});
