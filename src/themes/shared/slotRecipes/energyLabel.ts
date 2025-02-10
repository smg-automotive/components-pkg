import { defineSlotRecipe } from '@chakra-ui/react';

export const energyLabelRecipe = defineSlotRecipe({
  className: 'chakra-energy-label',
  slots: ['root', 'triangle', 'textWrapper', 'text'],
  base: {
    root: {
      '--A': '#4CA651',
      '--B': '#54B646',
      '--C': '#CAD143',
      '--D': '#FEF050',
      '--E': '#F1AE3D',
      '--F': '#EE6E2D',
      '--G': '#D02F26',
      '--height': '20px',
      height: 'var(--height)',
      width: 'md',
    },
    triangle: {
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      '--border-width': '10px',
      borderBottomWidth: 'var(--border-width)',
      borderTopWidth: 'var(--border-width)',
      borderRightWidth: 'var(--border-width)',
    },
    textWrapper: {
      width: 'full',
      height: 'full',
      justifyContent: 'end',
      alignItems: 'center',
      paddingRight: 'xs',
    },
    text: {
      color: 'white',
      textStyle: 'heading4',
    },
  },
  variants: {
    efficiency: {
      A: {
        triangle: {
          borderRightColor: 'var(--A)',
        },
        textWrapper: {
          backgroundColor: 'var(--A)',
        },
      },
      B: {
        triangle: {
          borderRightColor: 'var(--B)',
        },
        textWrapper: {
          backgroundColor: 'var(--B)',
        },
      },
      C: {
        triangle: {
          borderRightColor: 'var(--C)',
        },
        textWrapper: {
          backgroundColor: 'var(--C)',
        },
      },
      D: {
        triangle: {
          borderRightColor: 'var(--D)',
        },
        textWrapper: {
          backgroundColor: 'var(--D)',
        },
      },
      E: {
        triangle: {
          borderRightColor: 'var(--E)',
        },
        textWrapper: {
          backgroundColor: 'var(--E)',
        },
      },
      F: {
        triangle: {
          borderRightColor: 'var(--F)',
        },
        textWrapper: {
          backgroundColor: 'var(--F)',
        },
      },
      G: {
        triangle: {
          borderRightColor: 'var(--G)',
        },
        textWrapper: {
          backgroundColor: 'var(--G)',
        },
      },
    },
  },
  defaultVariants: {
    efficiency: 'A',
  },
});
