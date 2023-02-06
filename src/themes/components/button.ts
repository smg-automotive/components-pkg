import { ComponentStyleConfig, SystemStyleObject } from '@chakra-ui/react';

const baseStyle: SystemStyleObject = {
  borderRadius: 'sm',
  px: 'lg',
  whiteSpace: 'break-spaces',
};

const buttonSizes = {
  md: {
    height: 'md',
    textStyle: 'button-sm',
  },
  lg: {
    height: 'lg',
    textStyle: 'button',
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
