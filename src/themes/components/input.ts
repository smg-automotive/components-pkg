import type {
  PartsStyleObject,
  SystemStyleObject,
} from '@chakra-ui/theme-tools';
import { inputAnatomy as parts } from '@chakra-ui/anatomy';

import { shared } from '../shared';
const { sizes: sizeDefinitions, textStyles } = shared;

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
    fontSize: 'lg',
    px: 'md',
    py: 'xs',
    h: sizeDefinitions.md,
    borderRadius: 'md',
  },
  lg: {
    fontSize: 'lg',
    px: 'md',
    py: 'xs',
    h: sizeDefinitions.lg,
    borderRadius: 'md',
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
    ...textStyles.body,
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
