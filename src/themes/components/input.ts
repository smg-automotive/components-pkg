import type {
  PartsStyleObject,
  SystemStyleObject,
} from '@chakra-ui/theme-tools';
import { inputAnatomy as parts } from '@chakra-ui/anatomy';

const baseStyle: PartsStyleObject<typeof parts> = {
  field: {
    width: '100%',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
  },
};

const size: Record<string, SystemStyleObject> = {
  md: {
    fontSize: 'md',
    px: 4,
    h: 10,
    borderRadius: 'md',
  },
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  md: {
    field: size.md,
  },
};

const variantOutline: PartsStyleObject<typeof parts> = {
  field: {
    border: '1px solid',
    borderColor: 'inherit',
    bg: 'inherit',
    _hover: {
      borderColor: 'gray.400',
    },
    _readOnly: {
      boxShadow: 'none !important',
      userSelect: 'all',
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    _invalid: {
      borderColor: 'red.500',
    },
    _focusVisible: {
      zIndex: 1,
    },
  },
};

const variants = {
  outline: variantOutline,
};

const defaultProps = {
  size: 'md',
  variant: 'outline',
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
