import { defineTokens } from '@chakra-ui/react';

export const animations = defineTokens.animations({
  skeletonPulse: { value: 'skeletonPulse 1.6s linear infinite' },
  spin: { value: 'spin 0.8s linear infinite' },
  'fade-in': { value: 'fade-in var(--fade-in-duration, 0.1s) ease-out' },
});
