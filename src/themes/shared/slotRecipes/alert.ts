import { defineSlotRecipe } from '@chakra-ui/react';

export const alertRecipe = defineSlotRecipe({
  className: 'chakra-alert',
  slots: ['root', 'indicator', 'content', 'title', 'description', 'toastClose'],

  base: {
    root: {
      '--border-start-thickness': '4px',
      '--alert-max-width': '560px',
      '--alert-min-width': '300px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 'lg',
      padding: 'lg',
      borderStartWidth: 'var(--border-start-thickness)',
      maxWidth: 'var(--alert-max-width)',
      minWidth: 'var(--alert-min-width)',
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
    indicator: {
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      justifyContent: 'center',
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
    variant: {
      toast: {
        root: {
          translate: 'var(--x) var(--y)',
          scale: 'var(--scale)',
          width: 'full',
          zIndex: 'var(--z-index)',
          height: 'var(--height)',
          opacity: 'var(--opacity)',
          willChange: 'translate, opacity, scale',
          transitionProperty: 'common',
          transitionDuration: 'normal',
        },
        content: {
          pos: 'relative',
          pe: '3xl',
        },
        toastClose: {
          pos: 'absolute',
          top: '0',
          insetEnd: '0',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'toast',
  },
});
