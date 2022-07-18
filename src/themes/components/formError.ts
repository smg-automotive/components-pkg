import type {
  PartsStyleObject,
  SystemStyleObject,
} from '@chakra-ui/theme-tools';
import { formErrorAnatomy as parts } from '@chakra-ui/anatomy';

import { shared } from '../shared';
const { textStyles } = shared;

const baseStyleText: SystemStyleObject = {
  ...textStyles['body-small'],
  mt: 2,
  color: 'red.500',
};

const baseStyle: PartsStyleObject<typeof parts> = {
  text: baseStyleText,
};

export default {
  parts: parts.keys,
  baseStyle,
};
