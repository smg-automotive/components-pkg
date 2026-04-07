import { defineSlotRecipe } from '@chakra-ui/react';

export const alertRecipe = defineSlotRecipe({
  className: 'chakra-alert',
  slots: ['root', 'indicator', 'content', 'title', 'description', 'toastClose'],

  base: {
    root: {
      '--alert-fg': 'var(--chakra-colors-blue-700)',
      '--alert-bg': 'var(--chakra-colors-blue-100)',
      '--alert-border-start-width': '4px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 'lg',
      padding: 'lg',
      bg: 'var(--alert-bg)',
      borderStartWidth: 'var(--alert-border-start-width)',
      borderStartColor: 'var(--alert-fg)',
    },

    indicator: {
      color: 'var(--alert-fg)',
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      justifyContent: 'center',
      w: 'sm',
      h: 'sm',
    },

    content: {
      flex: '1 1 0%',
      minWidth: '0',
      display: 'flex',
      flexDirection: 'column',
      gap: 'xs',
      alignSelf: 'stretch',
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
