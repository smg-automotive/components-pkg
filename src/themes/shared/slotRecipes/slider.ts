import { defineSlotRecipe } from '@chakra-ui/react';

export const sliderSlotRecipe = defineSlotRecipe({
  className: 'chakra-slider',
  slots: ['root', 'control', 'track', 'range', 'markerGroup', 'thumb'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: 'base',
      '--slider-marker-inset': '4px',
      '--slider-marker-track': '5px',
      '--slider-thumb-border': '1px',
      '--slider-thumb-boxShadow': '0 0 0 8px #2988E14D',
    },
    control: {
      display: 'inline-flex',
    },
    track: {
      flex: '1',
      height: 'var(--slider-marker-track)',
      bg: 'gray.300',
      borderRadius: 'full',
    },
    range: {
      height: 'var(--slider-marker-inset)',
      bg: 'gray.800',
      borderRadius: 'full',
    },
    markerGroup: {
      position: 'absolute!',
      top: '2xl',
      insetInline: 'var(--slider-marker-inset)',
    },
    thumb: {
      width: 'sm',
      height: 'sm',
      borderRadius: 'full',
      borderWidth: 'var(--slider-thumb-border)',
      borderColor: 'gray.400',
      backgroundColor: 'white',
      translate: '0 -40%',
      _hover: {
        cursor: 'pointer',
      },
      _active: {
        boxShadow: 'var(--slider-thumb-boxShadow)',
      },
    },
  },
});
