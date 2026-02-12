import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { progressAnatomy as parts } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  track: {
    h: '0.5rem',
    bg: 'gray.50',
    borderRadius: 'lg',
  },
  filledTrack: {
    bg: 'gray.900',
  },
});

export default defineMultiStyleConfig({
  baseStyle,
});
