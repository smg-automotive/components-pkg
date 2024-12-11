import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

export const linkBaseStyle: SystemStyleObject = {
  textStyle: 'body',
  color: 'blue.700',
  display: 'inline-flex',
  flexDirection: 'row',
  _active: {
    textDecoration: 'none',
    color: 'gray.900',
  },
  _disabled: {
    textDecoration: 'none',
    color: 'gray.500',
  },
};

const baseLink: SystemStyleObject = {
  link: {
    _hover: {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
};

const navigationLink: SystemStyleObject = {
  link: {
    color: 'gray.900',
    cursor: 'pointer',
    fontSize: '16px',
    _hover: {
      textDecoration: 'none',
      color: 'blue.700',
    },
  },
};

const footerLink: SystemStyleObject = {
  link: {
    color: 'white',
    _hover: {
      textDecoration: 'underline',
    },
    _active: {
      color: 'gray.50',
    },
    _visited: {
      color: 'white',
    },
  },
};

const subNavigationLink: SystemStyleObject = {
  link: {
    color: 'gray.900',
    cursor: 'pointer',
    fontSize: '16px',
    _hover: {
      textDecoration: 'underline',
    },
    _focusVisible: {
      outline: 'none',
    },
  },
};

const Link: ComponentMultiStyleConfig = {
  parts: ['link', 'leftIcon', 'rightIcon'],
  baseStyle: {
    link: linkBaseStyle,
    leftIcon: { ml: 'md' },
    rightIcon: { mr: 'md' },
  },
  variants: {
    navigationLink,
    subNavigationLink,
    baseLink,
    footerLink,
  },
  defaultProps: {
    variant: 'baseLink',
  },
};

export default Link;
