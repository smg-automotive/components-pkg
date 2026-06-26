import { defineRecipe } from '@chakra-ui/react';

export const separatorRecipe = defineRecipe({
  base: {
    display: 'block',
    borderColor: 'gray.100',
    flexShrink: 0,
    '--separator-thickness': '1px',
  },
  variants: {
    orientation: {
      horizontal: {
        width: '100%',
        borderWidth: '0 0 var(--separator-thickness) 0',
      },
      vertical: {
        height: '100%',
        borderWidth: '0 0 0 var(--separator-thickness)',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});
