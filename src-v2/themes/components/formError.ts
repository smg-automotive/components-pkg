import type { PartsStyleObject, SystemStyleObject } from '@chakra-ui/react';
import { formErrorAnatomy as parts } from '@chakra-ui/anatomy';

const baseStyleText: SystemStyleObject = {
  textStyle: 'body-small',
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
