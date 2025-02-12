import { defineRecipe } from '@chakra-ui/react';

export const skeletonRecipe = defineRecipe({
  className: 'chakra-skeleton',
  base: {
    borderRadius: 'xs',
    '--start-color': '{colors.gray.100}',
    '--end-color': '{colors.gray.400}',
  },
  variants: {
    loading: {
      true: {
        opacity: '70',
        animation: 'skeletonPulse',
        cursor: 'default',

        '&::before, &::after, *': {
          visibility: 'hidden',
        },
      },
      false: {
        backgroundColor: 'none',
        animation: 'fade-in',
      },
    },
  },
  defaultVariants: {
    loading: true,
  },
});
