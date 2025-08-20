import { defineSlotRecipe } from '@chakra-ui/react';

export const checkboxRecipe = defineSlotRecipe({
  className: 'chakra-checkbox',
  slots: ['root', 'control', 'label', 'content'],
  base: {
    root: {
      display: 'inline-flex',
      gap: 'sm',
      verticalAlign: 'top',
      position: 'relative',
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'xs',
      height: 'xs',
      border: '1px',
      borderColor: 'gray.400',
      borderRadius: 'sm',
      cursor: 'pointer',
      '&:hover': {
        outlineStyle: 'solid',
        outlineWidth: '2px',
        outlineColor: 'blue.100',
        borderColor: 'gray.900',
      },
      _focusVisible: {
        outlineStyle: 'solid',
        outlineWidth: '2px',
        outlineColor: 'blue.300',
        borderColor: 'gray.900',
      },
      _icon: {
        boxSize: 'xs',
      },
      '&[data-state=checked], &[data-state=indeterminate]': {
        color: 'white',
        borderColor: 'gray.900',
        bg: 'gray.900',
      },
      _invalid: {
        borderColor: 'red.500',

        '&:hover': {
          outlineStyle: 'none',
          outlineWidth: '0',
        },
      },
      _disabled: {
        borderColor: 'gray.400',
        cursor: 'notAllowed',

        '&[data-state=checked], &[data-state=indeterminate]': {
          color: 'white',
          borderColor: 'gray.400',
          bg: 'gray.400',

          '&:hover': {
            bg: 'gray.400',
          },
        },

        '&:hover': {
          outlineStyle: 'none',
          outlineWidth: '0',
          borderColor: 'gray.400',
          bg: 'inherit',
        },
      },
    },
    content: {
      overflow: 'hidden',
      _open: {
        animationName: 'fade-in',
        animationDuration: 'normal',
      },
      _closed: {
        animationName: 'collapse-height',
        animationDuration: 'normal',
      },
    },
    label: {
      flex: '1 1 0%',
      display: 'flex',
      fontWeight: 'regular',
      color: 'gray.900',
      userSelect: 'none',
      cursor: 'pointer',
      _disabled: {
        color: 'gray.500',
        cursor: 'notAllowed',
      },
    },
  },
  variants: {
    variant: {
      alignCenter: {
        root: {
          alignItems: 'center',
        },
      },
      alignTop: {
        root: {
          alignItems: 'flex-start',
        },
        control: {
          marginTop: 'xs',
        },
      },
      alignTopForSmallSize: {
        root: {
          alignItems: 'flex-start',
        },
        control: {
          marginTop: 'xxs',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'alignCenter',
  },
});
