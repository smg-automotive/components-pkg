import { defineSlotRecipe } from '@chakra-ui/react';

export const sliderSlotRecipe = defineSlotRecipe({
  className: 'chakra-slider',
  slots: ['root', 'control', 'track', 'range', 'markerGroup', 'thumb'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
      fontSize: 'base',
      '--slider-marker-track': '4px',
      '--slider-thumb-border': '1px',
      '--slider-thumb-boxShadow': '0 0 0 8px #2988E14D',
      '--slider-thumb-size': 'var(--chakra-sizes-sm)',
      overflow: 'visible',
    },
    control: {
      display: 'flex',
      width: 'full',
      alignItems: 'center',
      position: 'relative',
      overflow: 'visible',
      paddingY: 'sm',
      height: 'sm',
    },
    track: {
      flex: '1',
      width: 'full',
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
    },
    thumb: {
      width: 'sm',
      height: 'sm',
      borderRadius: 'full',
      borderWidth: 'var(--slider-thumb-border)',
      borderColor: 'gray.400',
      backgroundColor: 'white',
      _hover: { cursor: 'pointer' },
      _active: { boxShadow: 'var(--slider-thumb-boxShadow)' },
    },
  },
});
