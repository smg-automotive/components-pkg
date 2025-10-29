import { defineSlotRecipe } from '@chakra-ui/react';

export const radioRecipe = defineSlotRecipe({
  className: 'chakra-radio',
  slots: ['root', 'item', 'control', 'indicator', 'text'] as const,
  base: {
    root: { position: 'relative' },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: 'sm',
      cursor: 'pointer',
      px: 'sm',
      py: 'sm',
      rounded: 'lg',
    },
    control: {
      boxSize: '5',
      rounded: 'full',
      border: '1px',
      borderColor: 'gray.400',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      _disabled: { opacity: '40', cursor: 'notAllowed' },
      _invalid: { borderColor: 'red.500' },
      _focusVisible: { outline: '2px solid', outlineColor: 'blue.400' },
    },
    indicator: {
      boxSize: '2.5',
      rounded: 'full',
      bg: 'blue.500',
      _disabled: { bg: 'gray.200' },
    },
    text: { userSelect: 'none', fontWeight: 'regular' },
  },
  variants: {
    variant: {
      fontRegular: { text: { fontWeight: 'regular' } },
      fontBold: { text: { fontWeight: 'bold' } },
    },
    size: {
      sm: { control: { boxSize: '4' }, indicator: { boxSize: '2' }, text: { fontSize: 'sm' } },
      md: { control: { boxSize: '5' }, indicator: { boxSize: '2.5' }, text: { fontSize: 'md' } },
      lg: { control: { boxSize: '6' }, indicator: { boxSize: '3' }, text: { fontSize: 'lg' } },
    },
  },
  defaultVariants: { variant: 'fontRegular', size: 'md' },
});