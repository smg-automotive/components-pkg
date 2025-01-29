import { defineTokens } from '@chakra-ui/react';

export const animations = defineTokens.animations({
  pulse: { value: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' },
  spin: { value: 'spin 0.8s linear infinite' },
});
