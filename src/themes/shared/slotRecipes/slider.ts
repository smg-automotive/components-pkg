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
      '--slider-marker-track': '4px',
      '--slider-thumb-border': '1px',
      '--slider-thumb-boxShadow': '0 0 0 8px #2988E14D',
    },
    control: {
      display: 'inline-flex',
    },
    track: {
      flex: '1',
      height: 'var(--slider-marker-track)',
      bg: 'gray.200',
      borderRadius: 'sm',
    },
    range: {
      height: 'var(--slider-marker-track)',
      bg: 'gray.900',
      borderRadius: 'sm',
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
