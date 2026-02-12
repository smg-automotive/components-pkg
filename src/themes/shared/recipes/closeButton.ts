import { defineRecipe } from '@chakra-ui/react';

export const closeButtonRecipe = defineRecipe({
  base: {
    width: 'xs',
    height: 'xs',
    color: 'gray.800',
    borderRadius: 'sm',
    cursor: 'pointer',
    _disabled: {
      opacity: '40',
      cursor: 'notAllowed',
      boxShadow: 'none',
    },
    _hover: {
      bg: 'blackAlpha.100',
    },
    _active: {
      bg: 'blackAlpha.200',
    },
  },
});
