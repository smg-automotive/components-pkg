import { ComponentStyleConfig, SystemStyleObject } from '@chakra-ui/react';

const baseStyle: SystemStyleObject = {
  borderRadius: 'sm',
  px: 'lg',
  whiteSpace: 'break-spaces',
};

const buttonSizes = {
  md: {
    height: 'md',
    textStyle: 'button',
  },
  lg: {
    height: 'lg',
    textStyle: 'button',
  },
};

const variants = {
  primary: {
    bg: 'brand.primary',
    color: 'black',
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
  success: {
    bg: 'green.500',
    color: 'white',
    _hover: {
      filter: 'brightness(1.1)',
    },
    _active: {
      filter: 'none',
      bg: 'green.500',
    },
    _disabled: {
      bg: 'gray.100',
      boxShadow: 'none',
      color: 'gray.400',
      pointerEvents: 'none',
    },
  },
  transparent: {
    bg: 'transparent',
    color: 'gray.900',
    border: 'none',
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
