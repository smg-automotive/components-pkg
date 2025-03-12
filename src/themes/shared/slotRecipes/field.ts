import { defineSlotRecipe } from '@chakra-ui/react';

export const fieldSlotRecipe = defineSlotRecipe({
  className: 'chakra-field',
  slots: [
    'root',
    'errorText',
    'helperText',
    'label',
    'labelRoot',
    'requiredIndicator',
    'tooltipWrapper',
    'tooltipIcon',
    'button',
  ],
  base: {
    requiredIndicator: {
      color: 'red.500',
      lineHeight: 'xs',
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: 'full',
      position: 'relative',
      gap: 'xs',
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'start',
      textStyle: 'label',
      fontWeight: 'bold',
      marginBottom: 'xs',
      userSelect: 'none',
      _disabled: {
        color: 'gray.300',
        cursor: 'notAllowed',
      },
    },
    labelRoot: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 'full',
    },
    errorText: {
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: 'regular',
      gap: 'sm',
      color: 'red.500',
      textStyle: 'body-small',
    },
    helperText: {
      color: 'gray.400',
      textStyle: 'body-small',
    },
    tooltipWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 'sm',
    },
    tooltipIcon: {
      position: 'relative',
      bottom: 'xxs',
    },
    button: {
      color: 'blue.700',
      padding: '0',
      textStyle: 'body-small',
    },
  },
  variants: {
    size: {
      sm: {
        label: { fontSize: 'sm' },
      },
      lg: {
        label: { fontSize: 'base' },
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
});
