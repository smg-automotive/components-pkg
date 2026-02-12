import { defineSlotRecipe } from '@chakra-ui/react';

export const energyLabelRecipe = defineSlotRecipe({
  className: 'chakra-energy-label',
  slots: ['root', 'triangle', 'textWrapper', 'text'],
  base: {
    root: {
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
      borderRightColor: 'var(--label-color)',
    },
    textWrapper: {
      width: 'full',
      height: 'full',
      justifyContent: 'end',
      alignItems: 'center',
      paddingRight: 'xs',
      backgroundColor: 'var(--label-color)',
    },
    text: {
      color: 'white',
      textStyle: 'heading4',
    },
  },
  variants: {
    efficiency: {
      A: {
        root: {
          '--label-color': '#4CA651',
        },
      },
      B: {
        root: {
          '--label-color': '#54B646',
        },
      },
      C: {
        root: {
          '--label-color': '#CAD143',
        },
      },
      D: {
        root: {
          '--label-color': '#FEF050',
        },
      },
      E: {
        root: {
          '--label-color': '#F1AE3D',
        },
      },
      F: {
        root: {
          '--label-color': '#EE6E2D',
        },
      },
      G: {
        root: {
          '--label-color': '#D02F26',
        },
      },
    },
  },
});
