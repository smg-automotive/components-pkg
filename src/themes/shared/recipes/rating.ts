import { defineRecipe } from '@chakra-ui/react';

export const ratingRecipe = defineRecipe({
  className: 'rating',
  base: {
    display: 'inline-block',
    fontFamily: 'makeItSans',
    lineHeight: 'xs',
  },
  variants: {
    size: {
      sm: { fontSize: 'sm' },
      lg: { fontSize: 'md' },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});
