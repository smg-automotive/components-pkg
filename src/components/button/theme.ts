import { SystemStyleObject } from '@chakra-ui/theme-tools';
import { ComponentStyleConfig } from '@chakra-ui/theme';

const baseStyle: SystemStyleObject = {
  borderRadius: 'sm',
  fontWeight: 'bold',
};

const sizes = {
  md: {
    py: 'sm',
    px: 'md',
    fontSize: 'sm',
  },
  lg: {
    py: 'md',
    px: 'lg',
    fontSize: 'md',
  },
  xl: {
    py: 'lg',
    px: 'xl',
    fontSize: 'md',
  },
};

const variants = {
  primary: {
    bg: 'brand.100',
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
