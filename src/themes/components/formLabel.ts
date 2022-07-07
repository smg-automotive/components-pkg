import type { SystemStyleObject } from '@chakra-ui/theme-tools';

import { shared } from '../shared';
const { typography } = shared;

const baseStyle: SystemStyleObject = {
  ...typography.label,
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
