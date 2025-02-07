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
      borderBottomColor: 'none',
      '--border-width': '10px',
      borderTopWidth: 'var(--border-width)',
      borderRightWidth: 'var(--border-width)',
      // borderRightColor: 
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
      textStyle:"heading4",
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
    },
  },
  
  // variants: {
  //   orientation: {
  //     vertical: {
  //       height: 'full',
  //       borderInlineStartWidth: 'var(--separator-thickness)',
  //     },
  //     horizontal: {
  //       width: 'full',
  //       borderTopWidth: 'var(--separator-thickness)',
  //     },
  //   },
});