import type { PartsStyleObject, SystemStyleObject } from '@chakra-ui/react';
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
    textAlign: 'right',
  },
};

const size: Record<string, SystemStyleObject> = {
  lg: {
    textStyle: 'body-small',
    h: 'lg',
  },
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
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

const variantInputLeft: PartsStyleObject<typeof parts> = {
  field: {
    ...variantOutline.field,
    borderTopEndRadius: 0,
    borderBottomEndRadius: 0,
    borderRight: 0,
  },
};

const variantInputRight: PartsStyleObject<typeof parts> = {
  field: {
    ...variantOutline.field,
    borderTopStartRadius: 0,
    borderBottomStartRadius: 0,
  },
};

const variants = {
  inputLeft: variantInputLeft,
  inputRight: variantInputRight,
};

const defaultProps = {
  size: 'lg',
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
