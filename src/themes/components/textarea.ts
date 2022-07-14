import type {
  SystemStyleInterpolation,
  SystemStyleObject,
} from '@chakra-ui/theme-tools';

import Input from './input';

const baseStyle: SystemStyleObject = {
  px: 'lg',
  pt: 'md',
  outline: 0,
  position: 'relative',
  appearance: 'none',
  transitionProperty: 'common',
  transitionDuration: 'normal',
};

const variants: Record<string, SystemStyleInterpolation> = {
  outline: Input.variants.outline.field ?? {},
};

const defaultProps = {
  variant: 'outline',
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
