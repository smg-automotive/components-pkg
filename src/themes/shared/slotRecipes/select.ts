import { defineSlotRecipe } from '@chakra-ui/react';

export const selectSlotRecipe = defineSlotRecipe({
  className: 'chakra-select',
  slots: ['root', 'field', 'indicator', 'icon'],
  base: {
    root: {
      justifyContent: 'left',
    },
    // icon should be styled properly
    icon: {
      right: 'sm',
      _disabled: {
        color: 'gray.200',
      },
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
