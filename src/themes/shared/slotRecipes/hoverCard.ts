import { hoverCardAnatomy } from '@chakra-ui/react/anatomy';
import { defineSlotRecipe } from '@chakra-ui/react';

export const hoverCardRecipe = defineSlotRecipe({
  slots: hoverCardAnatomy.keys(),
  base: {
    content: {
      _open: {
        animationStyle: 'scale-fade-in',
        animationDuration: 'normal',
      },
      _closed: {
        animationStyle: 'scale-fade-out',
        animationDuration: 'normal',
      },
    },
    arrow: {
      '--arrow-size': 'sizes.3',
      '--arrow-background': 'var(--hovercard-bg)',
    },
    arrowTip: {
      borderTopWidth: '0.5px',
      borderLeftWidth: '0.5px',
    },
  },
  variants: {
    size: {
      lg: {
        content: {
          width: '6xl',
          p: 'md',
        },
      },
      md: {
        content: {
          width: 'auto',
          p: '2xl',
        },
      },
    },
  },
});
