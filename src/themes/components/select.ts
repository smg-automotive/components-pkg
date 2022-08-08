import type {
  SystemStyleInterpolation,
  SystemStyleObject,
} from '@chakra-ui/theme-tools';

const baseStyle: SystemStyleObject = {
  field: {
    width: '100%',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    px: 'md',
    py: 'xs',
  },
};

const variants: Record<string, SystemStyleInterpolation> = {};

const defaultProps = {};

export default {
  baseStyle,
  variants,
  defaultProps,
};
