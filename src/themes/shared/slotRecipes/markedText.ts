import { defineSlotRecipe } from '@chakra-ui/react';

export const markedTextRecipe = defineSlotRecipe({
  className: 'chakra-marked-text',
  slots: ['container', 'text', 'mark'],

  base: {
    container: {
      '--container-width': 'max-content',
      position: 'relative',
      width: 'var(--container-width)',
      display: 'inline-flex',
      alignItems: 'center',
    },
    text: {
      position: 'relative',
      width: 'full',
      backgroundColor: 'transparent',
    },
    mark: {
      position: 'absolute',
      top: 'var(--mark-top)',
      left: 'var(--mark-left)',
      width: 'var(--mark-width)',
      height: 'var(--mark-height)',
    },
  },

  variants: {
    variant: {
      highlight: {
        container: {
          '--mark-top': '0',
          '--mark-left': '0',
          '--mark-width': '100%',
          '--mark-height': '100%',
          paddingX: 'sm',
        },
      },
      underline: {
        container: {
          '--mark-top': '1.25em',
          '--mark-left': '-0.25ch',
          '--mark-width': 'calc(100% + 0.5ch)',
          '--mark-height': {
            md: '8px',
            base: '6px',
          },
          paddingX: 'sm',
        },
        text: {
          lineHeight: 'sm',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'highlight',
  },
});
