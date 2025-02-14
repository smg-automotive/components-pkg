import { defineKeyframes } from '@chakra-ui/react';

export const keyframes = defineKeyframes({
  'fade-in': {
    from: { opacity: 0 },
    to: { opacity: 1 },
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
});
