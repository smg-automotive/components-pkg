import { popoverAnatomy } from '@chakra-ui/react/anatomy';
import { defineSlotRecipe } from '@chakra-ui/react';

export const popoverRecipe = defineSlotRecipe({
  slots: popoverAnatomy.keys(),
  base: {
    content: {
      bg: 'white',
      '--popover-bg': 'white',
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
      '--arrow-size': '12px',
      '--arrow-background': 'var(--popover-bg)',
    },
    arrowTip: {
      border: '1px',
      borderColor: 'white',
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
  defaultVariants: {
    size: 'md',
  },
});
