import { defineKeyframes } from '@chakra-ui/react';

export const keyframes = defineKeyframes({
  'expand-height': {
    from: { height: '0', opacity: 0 },
    to: { height: 'var(--height)', opacity: 1 },
  },
  'collapse-height': {
    from: { height: 'var(--height)' },
    to: { height: '0' },
  },
  'fade-in': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  'fade-out': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  skeletonPulse: {
    '0%': { backgroundColor: 'var(--start-color)' },
    '50%': { backgroundColor: 'var(--end-color)' },
    '100%': { backgroundColor: 'var(--start-color)' },
  },
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  'scale-in': {
    from: {
      scale: '0.95',
    },
    to: {
      scale: '1',
    },
  },
  'scale-out': {
    from: {
      scale: '1',
    },
    to: {
      scale: '0.95',
    },
  },
});
