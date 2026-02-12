import { defineRecipe } from '@chakra-ui/react';

export const countRecipe = defineRecipe({
  className: 'chakra-count',
  base: {
    '--dimension': '2.6ch',
    '--line-height': '1.6ch',
    display: 'inline-block',
    textAlign: 'center',
    textStyle: 'heading5',
    padding: 'xs',
    verticalAlign: 'middle',
    borderRadius: 'full',
    minW: 'var(--dimension)',
    minH: 'var(--dimension)',
    lineHeight: 'var(--line-height)',
  },
  variants: {
    variant: {
      primary: {
        bg: 'brand.primary',
        color: 'black',
      },
      inverted: {
        bg: 'white',
        color: 'black',
      },
      info: {
        bg: 'blue.100',
        color: 'blue.500',
      },
      success: {
        bg: 'green.100',
        color: 'green.500',
      },
      warning: {
        bg: 'orange.100',
        color: 'orange.400',
      },
      error: {
        bg: 'red.100',
        color: 'red.400',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
