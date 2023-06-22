import type { PartsStyleObject, SystemStyleObject } from '@chakra-ui/react';
import { formAnatomy as parts } from '@chakra-ui/anatomy';

const baseStyleHelperText: SystemStyleObject = {
  textStyle: 'body-small',
  mt: 2,
  color: 'gray.400',
};

const requiredIndicator: SystemStyleObject = {
  color: 'red.500',
};

const baseStyle: PartsStyleObject<typeof parts> = {
  helperText: baseStyleHelperText,
  requiredIndicator,
};

export default {
  parts: parts.keys,
  baseStyle,
};
