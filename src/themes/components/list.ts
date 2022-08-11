import type {
  PartsStyleObject,
  SystemStyleObject,
} from '@chakra-ui/styled-system';
import { listAnatomy as parts } from '@chakra-ui/anatomy';

const baseStyleIcon: SystemStyleObject = {
  marginEnd: '0.5rem',
  display: 'inline',
  verticalAlign: 'text-bottom',
};

const baseStyle: PartsStyleObject<typeof parts> = {
  container: {},
  item: {
    lineHeight: '1.75rem',
  },
  icon: baseStyleIcon,
};

export default {
  parts: parts.keys,
  baseStyle,
};
