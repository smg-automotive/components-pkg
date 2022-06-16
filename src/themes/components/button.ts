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
      bg: 'brand.100',
      boxShadow: 'none',
    },
    _disabled: {
      bg: 'gray.100',
      boxShadow: 'none',
      color: 'gray.400',
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
