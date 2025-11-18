import { defineSlotRecipe } from '@chakra-ui/react';

export const radioListItemRecipe = defineSlotRecipe({
  className: 'chakra-radio-list-item',
  slots: ['root'] as const,
  base: {
    root: {
      cursor: 'pointer',
      bg: 'white',
      borderRadius: 'xs',
      px: 'lg',
      py: 'sm',
      _hover: {
        bg: 'gray.50',
      },
      _checked: {
        bg: 'blue.100',
        _hover: {
          bg: 'blue.100',
        },
      },
    },
  },
});
