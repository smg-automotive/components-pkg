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
    leftIcon: { ml: 'xs' },
    rightIcon: { mr: 'xs' },
  },
  variants: {
    navigationLink,
    subNavigationLink,
    baseLink,
  },
  defaultProps: {
    variant: 'baseLink',
  },
};

export default Link;
