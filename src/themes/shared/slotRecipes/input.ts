import { defineSlotRecipe, defineStyle } from '@chakra-ui/react';

export const variantOutline = defineStyle({
  border: '1px',
  borderStyle: 'var(--chakra-border-style, solid)',
  borderColor: 'gray.400',
  borderRadius: 'sm',
  bg: 'inherit',
  color: 'gray.900',
  _placeholder: {
    color: 'gray.400',
  },
  _hover: {
    borderColor: 'gray.900',
  },
  _focus: {
    backgroundColor: 'blue.50',
  },
  _active: {},
  _invalid: {
    borderColor: 'red.500',
    _hover: {
      borderColor: 'red.500',
    },
  },
  _disabled: {
    cursor: 'notAllowed',
    color: 'gray.300',
    borderColor: 'gray.200',
  },
});

export const fieldBase = defineStyle({
  width: 'full',
  height: 'var(--input-height)',
  px: 'var(--input-padding-x)',
  py: 'var(--input-padding-y)',
  minWidth: '0',
  outline: 0,
  position: 'relative',
  appearance: 'none',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 'xs',
});

export const fieldSizeLarge = defineStyle({
  textStyle: 'body',
  '--input-padding-x': 'spacing.md',
  '--input-padding-y': 'spacing.xs',
  '--input-height': 'sizes.lg',
});

export const fieldSizeMedium = defineStyle({
  textStyle: 'body',
  '--input-padding-x': 'spacing.md',
  '--input-padding-y': 'spacing.xs',
  '--input-height': 'sizes.md',
});

export const inputSlotRecipe = defineSlotRecipe({
  className: 'chakra-input',
  slots: ['field', 'icon', 'clearButton'],
  base: {
    field: fieldBase,
    clearButton: {
      display: 'flex',
    },
  },
  variants: {
    variant: {
      outline: {
        field: variantOutline,
      },
    },
    size: {
      lg: {
        field: fieldSizeLarge,
        icon: {
          paddingLeft: 'md',
        },
        clearButton: {
          paddingRight: 'md',
        },
      },
      md: {
        field: fieldSizeMedium,
        icon: {
          paddingLeft: 'sm',
        },
        clearButton: {
          paddingRight: 'sm',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'lg',
  },
});
