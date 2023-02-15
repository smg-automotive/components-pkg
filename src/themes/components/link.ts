import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';

export const linkBaseStyle: SystemStyleObject = {
  textStyle: 'body',
  color: 'blue.700',
  display: 'inline-flex',
  flexDirection: 'row',
  _hover: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  _active: {
    textDecoration: 'none',
    color: 'gray.900',
  },
  _disabled: {
    textDecoration: 'none',
    color: 'gray.300',
  },
};

const Link: ComponentMultiStyleConfig = {
  parts: ['link', 'leftIcon', 'rightIcon'],
  baseStyle: {
    link: linkBaseStyle,
    leftIcon: { ml: 'xs' },
    rightIcon: { mr: 'xs' },
  },
};

export default Link;
