import { PartsStyleObject, SystemStyleObject } from '@chakra-ui/styled-system';
import { radioAnatomy as parts } from '@chakra-ui/anatomy';

import checkbox from './checkbox';

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    label: { fontSize: 'sm' },
  },
};

const baseStyleControl: SystemStyleObject = {
  ...checkbox.baseStyle.control,
  borderRadius: '50%',
  _checked: {
    borderColor: 'gray.900',
    _before: {
      content: `""`,
      display: 'inline-block',
      pos: 'relative',
      w: '50%',
      h: '50%',
      borderRadius: '50%',
      bg: 'currentColor',
    },
  },
};

const baseStyle: PartsStyleObject<typeof parts> = {
  label: checkbox.baseStyle.label,
  container: checkbox.baseStyle.container,
  control: baseStyleControl,
};

export default {
  sizes,
  baseStyle,
};
