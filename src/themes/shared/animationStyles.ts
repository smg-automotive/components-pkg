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
});
