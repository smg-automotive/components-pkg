import { defineSlotRecipe } from '@chakra-ui/react';

export const switchRecipe = defineSlotRecipe({
  slots: ['root', 'control', 'thumb', 'label'],
  className: 'chakra-switch',
  base: {
    root: {
      display: 'inline-flex',
      gap: 'sm',
      alignItems: 'center',
      position: 'relative',
      verticalAlign: 'middle',
      '--checkmark-width': '25%',
      '--checkmark-height': '45%',
      '--checkmark-top': '50%',
      '--checkmark-left': '50%',
      '--checkmark-border-style': 'solid',
      '--checkmark-border-width': '0 2px 2px 0',
      '--switch-diff': 'calc(var(--switch-width) - var(--switch-height))',
      '--switch-width': '1.875rem',
      '--switch-height': '1rem',
      '--switch-x': {
        base: 'var(--switch-diff)',
        _rtl: 'calc(var(--switch-diff) * -1)',
      },
    },
    control: {
      bg: 'gray.700',
      cursor: 'pointer',
      borderRadius: 'full',
      position: 'relative',
      padding: 'xxs',
      boxSizing: 'content-box',
      width: 'var(--switch-width)',
      height: 'var(--switch-height)',
      flexShrink: 0,
      _hover: {
        bg: 'gray.900',
      },
      _checked: {
        bg: 'blue.700',
        _hover: {
          bg: 'blue.800',
        },
      },
      _disabled: {
        bg: 'gray.400',
        cursor: 'notAllowed',
        _checked: {
          bg: 'gray.400',
        },
      },
    },
    thumb: {
      width: 'xs',
      height: 'xs',
      bg: 'white',
      borderRadius: 'full',
      position: 'absolute',
      top: 'xxs',
      left: 'xxs',
      _checked: {
        transform: 'translateX(var(--switch-x))',
        _after: {
          content: '""',
          display: 'block',
          width: 'var(--checkmark-width)',
          height: 'var(--checkmark-height)',
          borderStyle: 'var(--checkmark-border-style)',
          borderWidth: 'var(--checkmark-border-width)',
          position: 'absolute',
          top: 'var(--checkmark-top)',
          left: 'var(--checkmark-left)',
          transform: 'translate(-50%, -50%) rotate(45deg)',
          borderColor: 'blue.700',
        },
        _groupHover: {
          outlineStyle: 'solid',
          outlineWidth: '4px',
          outlineColor: 'blue.300/40',
        },
        _disabled: {
          _after: {
            borderColor: 'gray.400',
          },
        },
      },
    },
    label: {
      userSelect: 'none',
      fontSize: 'base',
      _disabled: {
        color: 'gray.600',
      },
    },
  },
});
