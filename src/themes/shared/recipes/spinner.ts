import { defineRecipe } from '@chakra-ui/react';

export const spinnerRecipe = defineRecipe({
  className: 'chakra-spinner',
  base: {
    display: 'inline-block',
    borderColor: 'gray.900',
    border: '2px',
    borderRadius: 'full',
    width: 'var(--spinner-size)',
    height: 'var(--spinner-size)',
    animation: 'spin',
    '--spinner-track-color': 'transparent',
    borderBottomColor: 'var(--spinner-track-color)',
    borderInlineStartColor: 'var(--spinner-track-color)',
  },
  variants: {
    size: {
      inherit: { '--spinner-size': 'sizes.sm' },
      xs: { '--spinner-size': 'sizes.xs' },
      sm: { '--spinner-size': 'sizes.sm' },
      md: { '--spinner-size': 'sizes.md' },
      lg: { '--spinner-size': 'sizes.lg' },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});
