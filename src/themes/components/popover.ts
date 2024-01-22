import type { PartsStyleFunction } from '@chakra-ui/react';
import { popoverAnatomy as parts } from '@chakra-ui/anatomy';

const baseStyleContent = {
  borderRadius: 'sm',
  boxShadow: 'md',
  maxW: '6xl',
  p: '2xl',
  // required for arrow to popup above shadow
  zIndex: 0,
};

const baseStyleArrow = {
  backgroundColor: 'white !important',
};

const baseStyle: PartsStyleFunction<typeof parts> = () => ({
  content: baseStyleContent,
  arrow: baseStyleArrow,
});

export default {
  parts: parts.keys,
  baseStyle,
};
