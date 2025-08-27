import { defineSlotRecipe } from '@chakra-ui/react';

export const selectSlotRecipe = defineSlotRecipe({
  className: 'chakra-select',
  slots: ['root', 'field', 'indicator'],
  base: {
    root: {
      position: 'relative',
    },
    field: {
      paddingRight: '3xl',
    },
    indicator: {
      position: 'absolute',
      top: 'half',
      right: 'sm',
      transform: 'translateY(-50%)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'xs',
      height: 'xs',
      pointerEvents: 'none',
    },
  },
  variants: {
    // Since we use input component styles, we can use the same variants
    variant: {
      outline: { root: {} },
    },
    size: {
      lg: {},
      md: {},
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
});
