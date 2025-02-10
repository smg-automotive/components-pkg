import { defineSlotRecipe } from '@chakra-ui/react';

export const energyLabelRecipe = defineSlotRecipe({
  className: 'chakra-energy-label',
  slots: ['root', 'triangle', 'textWrapper', 'text'],
  base: {
    root: {
      '--labelColor-A': '#4CA651',
      '--labelColor-B': '#54B646',
      '--labelColor-C': '#CAD143',
      '--labelColor-D': '#FEF050',
      '--labelColor-E': '#F1AE3D',
      '--labelColor-F': '#EE6E2D',
      '--labelColor-G': '#D02F26',
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
          borderRightColor: 'var(--labelColor-A)',
        },
        textWrapper: {
          backgroundColor: 'var(--labelColor-A)',
        },
      },
      B: {
        triangle: {
          borderRightColor: 'var(--labelColor-B)',
        },
        textWrapper: {
          backgroundColor: 'var(--labelColor-B)',
        },
      },
      C: {
        triangle: {
          borderRightColor: 'var(--labelColor-C)',
        },
        textWrapper: {
          backgroundColor: 'var(--labelColor-C)',
        },
      },
      D: {
        triangle: {
          borderRightColor: 'var(--labelColor-D)',
        },
        textWrapper: {
          backgroundColor: 'var(--labelColor-D)',
        },
      },
      E: {
        triangle: {
          borderRightColor: 'var(--labelColor-E)',
        },
        textWrapper: {
          backgroundColor: 'var(--labelColor-E)',
        },
      },
      F: {
        triangle: {
          borderRightColor: 'var(--labelColor-F)',
        },
        textWrapper: {
          backgroundColor: 'var(--labelColor-F)',
        },
      },
      G: {
        triangle: {
          borderRightColor: 'var(--labelColor-G)',
        },
        textWrapper: {
          backgroundColor: 'var(--labelColor-G)',
        },
      },
    },
  },
});
