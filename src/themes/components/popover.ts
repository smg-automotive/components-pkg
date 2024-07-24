import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { popoverAnatomy as parts } from '@chakra-ui/anatomy';
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);
const sizes = {
  xl: definePartsStyle({
    content: {
      width: '326px',
      p: 'md',
    },
  }),
  md: definePartsStyle({
    content: {
      width: 'auto',
      p: '2xl',
    },
  }),
};
export default defineMultiStyleConfig({ sizes });
