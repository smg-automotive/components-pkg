import { defineSlotRecipe } from '@chakra-ui/react';

import {
  fieldSizeLarge,
  fieldSizeMedium,
  inputSlotRecipe,
  variantOutline,
} from './input';

export const selectSlotRecipe = defineSlotRecipe({
  className: 'chakra-select',
  slots: ['root', 'field', 'indicator'],
  base: {
    root: {
      position: 'relative',
    },
    field: {
      ...inputSlotRecipe.base?.field,
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
      _disabled: { color: 'gray.200' },
    },
  },
  variants: {
    // Since we use input component styles, we can use the same variants
    variant: {
      outline: { field: variantOutline },
    },
    size: {
      lg: {
        field: fieldSizeLarge,
      },
      md: {
        field: fieldSizeMedium,
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'lg',
  },
});
