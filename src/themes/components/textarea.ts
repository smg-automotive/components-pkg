import type {
  SystemStyleInterpolation,
  SystemStyleObject,
} from '@chakra-ui/styled-system';

import Input from './input';

const baseStyle: SystemStyleObject = {
  px: 'lg',
  pt: 'md',
  outline: 0,
  position: 'relative',
  appearance: 'none',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  width: 'full',
};

const variants: Record<string, SystemStyleInterpolation> = {
  outline: Input.variants.outline.field ?? {},
};

const sizes: Record<string, SystemStyleObject> = {
  sm: { fontSize: 'sm' },
  md: { fontSize: 'base' },
};

const defaultProps = {
  variant: 'outline',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
