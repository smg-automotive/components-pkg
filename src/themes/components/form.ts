import type {
  PartsStyleObject,
  SystemStyleObject,
} from '@chakra-ui/styled-system';
import { formAnatomy as parts } from '@chakra-ui/anatomy';

const baseStyleHelperText: SystemStyleObject = {
  textStyle: 'body-small',
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
