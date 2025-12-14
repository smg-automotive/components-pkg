import { defineAnimationStyles } from '@chakra-ui/react';

export const animationStyles = defineAnimationStyles({
  'scale-fade-in': {
    value: {
      transformOrigin: 'var(--transform-origin)',
      animationName: ['scale-in', 'fade-in'],
    },
  },
  'scale-fade-out': {
    value: {
      transformOrigin: 'var(--transform-origin)',
      animationName: ['scale-out', 'fade-out'],
    },
  },
  // Remove unsupported 'slide-in-top' and 'slide-out-top', keeping valid 'fade-in'/'fade-out'.
  'slide-fade-in-top': {
    value: {
      animationName: ['fade-in'],
    },
  },
  'slide-fade-out-top': {
    value: {
      animationName: ['fade-out'],
    },
  },
});
