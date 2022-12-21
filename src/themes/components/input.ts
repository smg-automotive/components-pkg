import type {
  PartsStyleObject,
  SystemStyleObject,
} from '@chakra-ui/styled-system';
import { inputAnatomy as parts } from '@chakra-ui/anatomy';

const baseStyle: PartsStyleObject<typeof parts> = {
  field: {
    width: 'full',
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

const size: Record<string, SystemStyleObject> = {
  md: {
    textStyle: 'body-small',
    h: 'md',
  },
  lg: {
    textStyle: 'body',
    h: 'lg',
  },
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  md: {
    field: size.md,
  },
  lg: {
    field: size.lg,
  },
};

const variantOutline: PartsStyleObject<typeof parts> = {
  field: {
    border: '1px solid',
    borderColor: 'gray.400',
    borderRadius: 'sm',
    bg: 'inherit',
    color: 'gray.900',
    _placeholder: {
      color: 'gray.400',
    },
    _hover: {
      borderColor: 'gray.900',
    },
    _focus: {
      backgroundColor: 'blue.50',
    },
    _active: {},
    _invalid: {
      borderColor: 'red.500',
    },
    _disabled: {
      cursor: 'not-allowed',
      color: 'gray.300',
      borderColor: 'gray.200',
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
