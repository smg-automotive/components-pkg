import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { radioAnatomy as parts } from '@chakra-ui/anatomy';

import checkbox from './checkbox';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const sizes = {
  sm: {
    label: { fontSize: 'sm' },
  },
};

const baseStyleControl = defineStyle({
  ...(checkbox.baseStyle?.control || {}),
  borderRadius: '50%',
  _checked: {
    borderColor: 'gray.900',
    _before: {
      content: `""`,
      display: 'inline-block',
      pos: 'relative',
      w: '50%',
      h: '50%',
      borderRadius: '50%',
      bg: 'currentColor',
    },
  },
});

const baseStyle = definePartsStyle({
  label: checkbox.baseStyle?.label,
  container: checkbox.baseStyle?.container,
  control: baseStyleControl,
});

export default defineMultiStyleConfig({
  sizes,
  baseStyle,
});
