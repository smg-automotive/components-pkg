import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { radioAnatomy as parts } from '@chakra-ui/anatomy';

import { fontWeights } from '../shared/fontWeights';
import checkbox from './checkbox';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const sizes = {
  base: {
    label: { fontSize: 'base' },
  },
  md: {
    label: { fontSize: 'md' },
  },
};

const baseStyleControl = defineStyle({
  ...(checkbox.baseStyle?.control || {}),
  borderRadius: '50%',
  _checked: {
    borderColor: 'gray.900',
    bg: 'gray.900',
    _disabled: {
      bg: 'gray.400',
    },
    _before: {
      content: `""`,
      display: 'inline-block',
      pos: 'relative',
      w: '50%',
      h: '50%',
      borderRadius: '50%',
      bg: 'white',
    },
  },
});

const variants = {
  fontBold: definePartsStyle({
    label: defineStyle({
      fontWeight: fontWeights.bold,
    }),
  }),
  fontRegular: definePartsStyle({
    label: defineStyle({
      fontWeight: fontWeights.regular,
    }),
  }),
};

const baseStyle = definePartsStyle({
  label: checkbox.baseStyle?.label,
  container: checkbox.baseStyle?.container,
  control: baseStyleControl,
});

export default defineMultiStyleConfig({
  sizes,
  baseStyle,
  variants,
});
