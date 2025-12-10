import { defineRecipe } from '@chakra-ui/react';

export const radioListItemRecipe = defineRecipe({
  className: 'chakra-radio-list-item',
  base: {
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
});
