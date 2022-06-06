import { SystemStyleObject } from '@chakra-ui/theme-tools';
import { ComponentStyleConfig } from '@chakra-ui/theme';

import { sizes, typography } from '../../theme/shared';

const baseStyle: SystemStyleObject = {
  borderRadius: 'sm',
};

const buttonSizes = {
  md: {
    height: sizes.md,
    px: 'md',
    ...typography.heading5,
  },
  lg: {
    height: sizes.lg,
    px: 'lg',
    ...typography.heading4,
  },
  xl: {
    height: sizes.xl,
    px: 'xl',
    ...typography.heading4,
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
