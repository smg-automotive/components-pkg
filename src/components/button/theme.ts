import { SystemStyleObject } from '@chakra-ui/theme-tools';
import { ComponentStyleConfig } from '@chakra-ui/theme';

import { typography } from '../../theme/shared';

const baseStyle: SystemStyleObject = {
  borderRadius: 'sm',
  fontWeight: 'bold',
};

const sizes = {
  md: {
    py: 'sm',
    px: 'md',
    ...typography.heading5,
  },
  lg: {
    py: 'md',
    px: 'lg',
    ...typography.heading4,
  },
  xl: {
    py: 'lg',
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
      boxShadow: 'none',
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
  sizes: sizes,
  variants,
};

export default Button;
