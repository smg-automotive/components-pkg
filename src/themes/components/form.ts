import type {
  PartsStyleObject,
  SystemStyleObject,
} from '@chakra-ui/theme-tools';
import { formAnatomy as parts } from '@chakra-ui/anatomy';

import { shared } from '../shared';
const { textStyles } = shared;

const baseStyleHelperText: SystemStyleObject = {
  ...textStyles['body-small'],
  mt: 2,
  color: 'gray.400',
};

const baseStyle: PartsStyleObject<typeof parts> = {
  helperText: baseStyleHelperText,
};

export default {
  parts: parts.keys,
  baseStyle,
};
