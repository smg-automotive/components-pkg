import type {
  SystemStyleInterpolation,
  SystemStyleObject,
} from '@chakra-ui/theme-tools';

import Input from './input';

const baseStyle: SystemStyleObject = {
  field: {
    ...Input.baseStyle.field,
  },
};

const variants: Record<string, SystemStyleInterpolation> = {
  outline: Input.variants.outline,
};

const defaultProps = {
  variant: 'outline',
};

export default {
  baseStyle,
  sizes: Input.sizes,
  variants,
  defaultProps,
};
