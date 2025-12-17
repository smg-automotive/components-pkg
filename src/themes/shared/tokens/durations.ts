import { defineTokens } from '@chakra-ui/react';

export const durations = defineTokens.durations({
  fast: {
    value: '150ms',
  },
  normal: {
    value: '200ms',
  },
  slow: {
    value: '350ms',
  },
  slower: { value: '1s' },
});
