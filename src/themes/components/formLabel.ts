import type { SystemStyleObject } from '@chakra-ui/react';

const sizes: Record<string, SystemStyleObject> = {
  sm: { fontSize: 'sm' },
  lg: { fontSize: 'base' },
};

const baseStyle: SystemStyleObject = {
  textStyle: 'label',
  mb: 4,
  cursor: 'pointer',
  color: 'gray.900',
  _disabled: {
    color: 'gray.300',
    cursor: 'not-allowed',
  },
};

export default {
  baseStyle,
  sizes,
};
