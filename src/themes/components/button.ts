import { SystemStyleObject } from '@chakra-ui/theme-tools';
import { ComponentStyleConfig } from '@chakra-ui/theme';

import { shared } from '../shared';

const { sizes, typography } = shared;

const baseStyle: SystemStyleObject = {
  borderRadius: 'sm',
  px: 'lg',
};

const buttonSizes = {
  md: {
    height: sizes.md,
    ...typography['button-sm'],
  },
  lg: {
    height: sizes.lg,
    ...typography.button,
  },
};

const variants = {
  primary: {
    bg: 'brand.primary',
    color: 'gray.900',
    boxShadow: 'button',
    _hover: {
      filter: 'brightness(1.1)',
    },
    _active: {
      filter: 'none',
      bg: 'brand.primary',
      boxShadow: 'none',
    },
    _disabled: {
      bg: 'gray.100',
      boxShadow: 'none',
      color: 'gray.400',
      pointerEvents: 'none',
    },
  },
  secondary: {
    bg: 'white',
    color: 'gray.900',
    border: '1px',
    borderColor: 'gray.900',
    _hover: {
      bg: 'gray.100',
    },
    _active: {
      bg: 'gray.200',
    },
    _disabled: {
      color: 'gray.300',
      borderColor: 'gray.300',
      pointerEvents: 'none',
    },
  },
};

const Button: ComponentStyleConfig = {
  baseStyle,
  sizes: buttonSizes,
  variants,
};

export default Button;
