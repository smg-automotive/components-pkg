import { defineSlotRecipe } from '@chakra-ui/react';

export const tooltipSlotRecipe = defineSlotRecipe({
  slots: ['trigger', 'arrow', 'arrowTip', 'positioner', 'content'],
  className: 'chakra-tooltip',
  base: {
    content: {
      '--tooltip-bg': '{colors.gray.900}',
      bg: 'var(--tooltip-bg)',
      color: 'white',
      padding: 'sm',
      textStyle: 'body',
      maxWidth: '6xl',
      zIndex: 'tooltip',
      transformOrigin: 'var(--transform-origin)',
      _open: {
        animationStyle: 'scale-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'scale-fade-out',
        animationDuration: 'fast',
      },
    },
    arrow: {
      '--arrow-size': 'sizes.xxs',
      '--arrow-background': 'var(--tooltip-bg)',
    },
    arrowTip: {
      borderTop: '1px',
      borderInlineStart: '1px',
      borderColor: 'var(--tooltip-bg)',
    },
  },
});
