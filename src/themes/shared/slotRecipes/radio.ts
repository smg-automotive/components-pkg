import { defineSlotRecipe } from '@chakra-ui/react';
export const radioRecipe = defineSlotRecipe({
  className: 'chakra-radio',
  slots: ['root', 'item', 'control', 'indicator', 'label'],
  base: {
    root: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      '--radio-control-size': '16px',
      '--radio-indicator-size': '16px',
      '--radio-border-style': 'solid',
      '--radio-border-width': '1px',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: 'sm',
      cursor: 'pointer',
      px: 'sm',
      py: 'xxs',
      listStyle: 'none',
      padding: '0',
    },
    control: {
      boxSize: 'xs',
      rounded: 'full',
      borderStyle: 'var(--radio-border-style)',
      borderWidth: 'var(--radio-border-width)',
      borderColor: 'gray.400',
      bg: 'white',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      _checked: {
        bg: 'gray.900',
        borderColor: 'gray.900',
      },

      _focusVisible: { outline: '2px solid', outlineColor: 'blue.400' },
      _invalid: { borderColor: 'red.500' },

      _disabled: {
        cursor: 'notAllowed',
        borderColor: 'gray.400',

        _checked: {
          bg: 'gray.400',
          borderColor: 'gray.400',
        },
        _invalid: { borderColor: 'red.500' },
      },
    },

    indicator: {
      rounded: 'full',
      width: 'xxs',
      height: 'xxs',
      bg: 'white',
      opacity: 0,
      transform: 'scale(0.6)',
      transition: 'opacity 0.15s ease, transform 0.15s ease',
      _checked: {
        opacity: 1,
        transform: 'scale(1)',
        _disabled: {
          bg: 'white',
        },
      },
    },
    label: {
      userSelect: 'none',
      fontWeight: 'regular',
      color: 'gray.900',
      _disabled: { color: 'gray.400' },
    },
  },
  variants: {
    variant: {
      fontRegular: {
        root: {},
        item: {},
        control: {},
        indicator: {},
        label: { fontWeight: 'regular' },
      },
      fontBold: {
        root: {},
        item: {},
        control: {},
        indicator: {},
        label: { fontWeight: 'bold' },
      },
    },
    size: {
      base: {
        root: {},
        item: {},
        control: {},
        indicator: {},
        label: { fontSize: 'base' },
      },
      md: {
        root: {},
        item: {},
        control: {},
        indicator: {},
        label: { fontSize: 'md' },
      },
    },
  },
  defaultVariants: { variant: 'fontRegular', size: 'base' },
});
