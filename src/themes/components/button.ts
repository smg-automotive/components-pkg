import { ComponentStyleConfig } from '@chakra-ui/theme';
import { SystemStyleObject } from '@chakra-ui/styled-system';

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
  primary: ({ theme: { name } }) => {
    return {
      bg: 'brand.primary',
      color: name === 'ImmoScout 24' ? 'rgb(51, 51, 51)' : 'white',
      boxShadow: 'button',
      _hover: {
        filter: 'brightness(0.9)',
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
    };
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
