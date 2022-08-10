import type { SystemStyleObject } from '@chakra-ui/styled-system';

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
};
