import { defineSlotRecipe } from '@chakra-ui/react';

export const alertRecipe = defineSlotRecipe({
  className: 'chakra-alert',
  slots: ['root', 'indicator', 'content', 'title', 'description'],

  base: {
    root: {
      '--border-start-thickness': '4px',
      display: 'flex',
      alignItems: 'center',
      padding: 'lg',
      borderStartWidth: 'var(--border-start-thickness)',
    },
    title: {
      textStyle: 'heading4',
    },
    description: {
      textStyle: 'body',
    },
    indicator: {
      display: 'inline-block',
      flexShrink: 0,
      alignSelf: 'start',
      marginEnd: 'lg',
      w: 'sm',
      h: 'sm',
    },
  },
  variants: {
    status: {
      error: {
        root: {
          borderStartColor: 'red.500',
          bg: 'red.100',
        },
        indicator: {
          color: 'red.500',
        },
      },
      warning: {
        root: {
          borderStartColor: 'orange.500',
          bg: 'orange.100',
        },
        indicator: {
          color: 'orange.500',
        },
      },
      info: {
        root: {
          borderStartColor: 'blue.700',
          bg: 'blue.100',
        },
        indicator: {
          color: 'blue.700',
        },
      },
      success: {
        root: {
          borderStartColor: 'green.500',
          bg: 'green.100',
        },
        indicator: {
          color: 'green.500',
        },
      },
    },
  },
});
