import { defineRecipe } from '@chakra-ui/react';

export const separatorRecipe = defineRecipe({
  base: {
    display: 'block',
    borderColor: 'gray.100',
    '--separator-thickness': '1px',
  },
  variants: {
    orientation: {
      vertical: {
        height: 'full',
        borderInlineStartWidth: 'var(--separator-thickness)',
      },
      horizontal: {
        width: 'full',
        borderTopWidth: 'var(--separator-thickness)',
      },
    },
  },
});
