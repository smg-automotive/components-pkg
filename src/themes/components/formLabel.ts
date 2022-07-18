import type { SystemStyleObject } from '@chakra-ui/theme-tools';

import { shared } from '../shared';
const { textStyles } = shared;

const baseStyle: SystemStyleObject = {
  ...textStyles.label,
  mb: 4,
  cursor: 'pointer',
  _disabled: {
    color: 'gray.300',
    cursor: 'not-allowed',
  },
};

export default {
  baseStyle,
};
