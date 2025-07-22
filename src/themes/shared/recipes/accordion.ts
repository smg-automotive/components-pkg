import { defineRecipe } from '@chakra-ui/react';

export const accordionRecipe = defineRecipe({
  className: 'chakra-accordion',
  base: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: 'red.900',
  },
  variants: {
    multiple: {
      true: {},
      false: {},
    },
    variant: {
      light: {
        backgroundColor: 'white',
        color: 'gray.800',
      },
      dark: {
        backgroundColor: 'gray.800',
        color: 'white',
      },
      minimal: {
        backgroundColor: 'transparent',
        color: 'gray.600',
      },
    },
  },
  defaultVariants: {
    multiple: false,
    variant: 'light',
  },
});
