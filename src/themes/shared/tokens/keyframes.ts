import { defineKeyframes } from '@chakra-ui/react';

export const keyframes = defineKeyframes({
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  pulse: {
    "100%": { opacity: "0.5" },
  },
});
