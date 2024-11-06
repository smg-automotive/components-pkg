import { defineTokens } from '@chakra-ui/react';

export const zIndex = defineTokens.zIndex({
  hide: { value: -1 },
  auto: { value: 'auto' },
  base: { value: 0 },
  docked: { value: 10 },
  header: { value: 900 },
  dropdown: { value: 1000 },
  sticky: { value: 1100 },
  banner: { value: 1200 },
  overlay: { value: 1300 },
  modal: { value: 1400 },
  popover: { value: 1500 },
  skipLink: { value: 1600 },
  toast: { value: 1700 },
  fullScreenModal: { value: 2000 },
  tooltip: { value: 2100 },
});
