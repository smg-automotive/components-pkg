import { defineSlotRecipe } from '@chakra-ui/react';

export const alertRecipe = defineSlotRecipe({
  className: 'chakra-alert',
  slots: ['root', 'indicator', 'content', 'title', 'description'],

  base: {
    root: {
      '--alert-fg': 'var(--chakra-colors-blue-700)',
      '--alert-bg': 'var(--chakra-colors-blue-100)',
      '--alert-border-start-width': '4px',
      display: 'flex',
      alignItems: 'flex-start',
      padding: 'lg',
      bg: 'var(--alert-bg)',
      borderStartWidth: 'var(--alert-border-start-width)',
      borderStartColor: 'var(--alert-fg)',
    },

    indicator: {
      color: 'var(--alert-fg)',
      flexShrink: 0,
      alignSelf: 'start',
      marginEnd: 'lg',
      w: 'sm',
      h: 'sm',
      display: 'inline-flex',
    },

    content: {
      flex: '1',
      minW: '0',
    },

    title: {
      textStyle: 'heading4',
    },

    description: {
      textStyle: 'body',
    },
  },

  variants: {
    status: {
      info: {
        root: {
          '--alert-fg': 'var(--chakra-colors-blue-700)',
          '--alert-bg': 'var(--chakra-colors-blue-100)',
        },
      },
      success: {
        root: {
          '--alert-fg': 'var(--chakra-colors-green-500)',
          '--alert-bg': 'var(--chakra-colors-green-100)',
        },
      },
      warning: {
        root: {
          '--alert-fg': 'var(--chakra-colors-orange-500)',
          '--alert-bg': 'var(--chakra-colors-orange-100)',
        },
      },
      error: {
        root: {
          '--alert-fg': 'var(--chakra-colors-red-500)',
          '--alert-bg': 'var(--chakra-colors-red-100)',
        },
      },
    },
  },

  defaultVariants: {
    status: 'info',
  },
});
